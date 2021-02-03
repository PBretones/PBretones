const fs = require('fs');


const createWishList = (name, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./lists/${name}-list.txt`, data, (error) => {
            if (error) reject(error);
            resolve(`El fichero ${name}-list.txt ha sido guardado`);
        });
    })
}

const removeFile = ((name) => {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(`./lists/${name}.txt`)) {
            fs.unlink(`./lists/${name}-list.txt`, error => {
                if (error) reject(error);
                resolve(`El fichero ${name}-list.txt ha sido eliminado`);
            });
        } else {
            reject('File doesnt exist')
        }
    })
});
const listWishes = (name) => {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(`./lists/${name}-list.txt`)) {
            fs.readFile(`./lists/${name}-list.txt`, "utf-8", (error, data) => {
                if (error) reject(error);
                resolve(data);
            })

        } else {
            reject("ewlficheronoexi");
        }

    })
}

module.exports = {
    createWishList, listWishes, removeFile
}