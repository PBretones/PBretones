const express = require('express');
const router = express.Router();

const { signUp, logIn, showUser, showOneUser } = require('../controllers/userController');
const { createCustomPase, showAllPases } = require('../controllers/customPaseController');
const { userById, isAuth, requireSignIn, userFav } = require('../middleware/auth');

router.post('/signup', signUp);
router.post('/login', logIn);
router.get("/user/show", showUser);
router.get("/user/:userId", requireSignIn, isAuth, showOneUser);
router.get("/userpases/show", showAllPases)


router.post('/customPase/:userId', requireSignIn, isAuth, userFav, createCustomPase);

router.param('userId', userById);

module.exports = router;

