const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        description: {
            alias: 'd',
            demand: true,
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('borrar', 'Elimina una tarea por hacer', {
        description: {
            alias: 'b',
            demand: true,
            desc: 'Descripcion de la tarea por hacer de la que se quiere borrar'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        description: {
            alias: 'd',
            demand: true,
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .help()
    .argv;

module.exports = argv;