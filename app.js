// tipos de required:
// const fs = require('fs') proyecto propio de node
// const fs = require('express') paquetes no nativos
// const fs = require('./fs') archivos que se crean dentro del proyecto

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}
// console.log(argv.base);

// let parametro = argv[2];
// let base = parametro.split('=')[1]
