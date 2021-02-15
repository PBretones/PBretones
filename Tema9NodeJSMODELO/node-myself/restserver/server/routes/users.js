const express = require("express");

const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const R = require("ramda");
const { verifyToken } = require("../middleware/auth")

router.get("/", verifyToken, (req, res) => {

    let from = req.query.from || 0;
    from = Number(from);


    let limit = req.query.limit || 5;
    limit = Number(limit);

    User.find({}, "username email").skip(from).limit(limit).exec((error, users) => {
        if (error !== null) {
            res.status(400).json({
                ok: false,
                error
            })
        } else {
            res.json({
                ok: true,
                users

            })
        }


    });

});

router.post("/", (req, res) => {
    const body = req.body;

    const user = new User({
        username: body.username,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role

    })
    user.save((error, userDB) => {
        if (error !== null) {
            res.status(400).json({
                ok: false,
                error
            });
        } else {
            res.json({

                user: userDB
            })
        }
    });

});




router.put("/:id", verifyToken, (req, res) => {
    const id = req.params.id;

    const body = R.pick(["username"], req.body)

    User.findByIdAndUpdate(id, body, { new: true }, (error, userDB) => {
        res.json({

            user: userDB
        })
    });

})


router.delete("/", (req, res) => {
    res.json("DELETE USER");
})

module.exports = router;