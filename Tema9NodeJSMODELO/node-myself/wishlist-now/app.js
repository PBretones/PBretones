const argv = require('./helpers/yargs').argv;
const { createWishList, listWishes, removeFile } = require('./helpers/file');
require('colors')
    ;

const main = () => {
    const command = argv._[0];
    const name = argv.name;
    const data = argv.desc;
    console.log(command);


    switch (command) {
        case 'create':
            console.log('=============='.america);
            console.log("Comando create".yellow);
            console.log('=============='.america);
            createWishList(name, data).then(value => console.log(value))
            break;
        case 'list':
            console.log('=============='.america);
            console.log("Comando list".yellow);
            console.log('=============='.america);
            listWishes(name)
                .then(data => console.log(data))
                .catch(error => console.log(error))
            break;
        case 'remove':
            console.log('=============='.america);
            console.log("Comando remove".red);
            console.log('=============='.america);
            removeFile(name)
                .then(info => console.log(info))
                .catch(error => console.log(error))
            break;
        default:
            console.log("No es un comando valido".red);

    }

}

main();
