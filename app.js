const argv = require('./config/yargs');
const colors = require('colors');
const {crearTabla} = require('./helpers/multiplicar');

console.clear();

// const[,,arg3= 'base=5'] = process.argv; Con esto podemos recibir los argumentos de la consola

// const base = 2;

crearTabla(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log('Archivo:'.brightWhite, nombreArchivo.underline.brightWhite, 'Creado correctamente'.brightGreen))
    .catch(err => console.log('El archivo no pudo ser creado'.brightRed));
