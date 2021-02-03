/* const { mostrarConsola } = require('./mostrarConsola'); 
const colors = require('colors');
const fs = require('fs');

console.log(process.argv);
const iniciar = () => {
    console.log(colors.cyan("Inicio de la aplicacion de prueba"));
    /mostrarConsola(); 
    fs.writeFile('./template.txt', "Template\n Jose", () => console.log("Fichero creado"));
}

iniciar(); */

// node app.js create --name=nombre --desc=[producto1,producto2,producto3];
const colors = require('colors');

const argv = require('./config/yargs').argv;

const main = () => {
    const command = argv._[0];



    switch (command) {
        case 'create':
            console.log("Creando wishlist".blue);
            fs.writeFile(`wishlists/${argv.name}-wishlist.txt`, argv.desc, (err) => {
                if (err) console.log(colors.red(err));
                console.log('The file has been saved');
            })
            break;
        case 'list':
            console.log("Creando wishlist".blue);
            fs.readFile(`wishlists/${argv.name}-wishlist.txt`);
            break;
        default:
            console.log("Command doesnt exists");

    }

}

main();