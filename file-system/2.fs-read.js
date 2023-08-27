// importamos el modulo nativo 'fs'
const fs = require('node:fs');

// leemos el contenido del primer archivo
console.log('leyendo el contenido del primer archivo');

fs.readFile('./archivo-prueba.txt', 'utf-8', (err, text) => {
    console.log('primer texto: ',text);
});

console.log('Hacer cosas');

// leemos el contenido del segundo archivo
console.log('leyendo el contenido del segundo archivo');
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log('segundo texto: ', text);
});
