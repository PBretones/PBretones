const yargs = require('yargs')
    .command('create', 'Crear lista de deseos', {
        name: {
            alias: 'n',
            demandOption: true
        },
        desc: {
            alias: 'd',
            demandOption: true
        }
    })
    .command('list', 'Listar lista de deseos', {
        name: {
            alias: 'n',
            demandOption: true
        }
    })
    .command('remove', 'Elimina archivo', {
        name: {
            alias: 'n',
            demandOption: true
        }
    })

module.exports = yargs;