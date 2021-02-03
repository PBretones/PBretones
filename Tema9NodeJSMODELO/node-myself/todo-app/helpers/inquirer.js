const inquirer = require('inquirer');

const menu = async () => {
    const { option } = await inquirer
        .prompt({
            type: 'list',
            name: 'option',
            message: 'Opcion a realizar',
            choices: [{
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            }]
        })
    return option;

}


const stop = async () => {
    inquirer.prompt({
        type: 'input',
        name: 'enter',
        message: 'Presione enter para continuar'
    });

}

const confirm = async () => {
    const { ok } = await inquirer.prompt({
        type: 'confirm',
        name: 'ok',
        message: 'Estas seguro?'
    })
    return ok
}

module.exports = {
    menu, stop, confirm
}