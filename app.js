const argv = require('./config/yargs');
const colors = require('colors');
const { crear, getListado, actualizar, borrar } = require('./por_hacer/por-hacer');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = crear(argv.description);
        console.log(tarea);
        break;
    case 'listar':
        let listado = getListado();
        listado.forEach(element => {
            console.log('======Por Hacer======'.green);
            console.log(element.descripcion);
            console.log('Estado: ' + element.completado);
            console.log('====================='.green);
        });
        break;
    case 'actualizar':
        let actualizado = actualizar(argv.description, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = borrar(argv.description);
        console.log(borrado);
        break;

    default:
        break;
}