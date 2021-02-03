const inquirer = require('inquirer');
const { menu, stop, confirm } = require('./helpers/inquirer')
const Tasks = require('./models/tasks');

const main = async () => {
    let opt = "";

    const tasks = new Tasks();
    do {
        opt = await menu();
        switch (opt) {
            case '1':
                console.log('Crear tarea');
                const { description } = await inquirer.prompt({
                    type: 'input',
                    name: 'description',
                    message: 'Descripcion de la tarea: '
                });
                tasks.create(description)

                break;
            case '2':
                console.log('Listar tareas');
                tasks.list.forEach(task => {
                    const completed = task.completed ? 'Completada' : 'Pendiente';
                    console.log(`${task.description} - ${completed}`);
                })
                break;
        }
        if (opt !== '0') {
            await stop()
        } else {
            const ok = await confirm()
            if (!ok) opt = ''
        }
    }
    while (opt !== '0')
}

main();
