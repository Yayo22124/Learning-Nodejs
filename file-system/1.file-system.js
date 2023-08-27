// importamos el módulo nativo de Node.js 'fs'
const fs = require('node:fs');

const stats = fs.statSync('./archivo-prueba.txt');

console.log(
    stats.isFile(), // Si es un fichero
    stats.isDirectory(), // Si es un directorio
    stats.isSymbolicLink(), // Si es un enlace simbolico
    stats.size, // Tamaño en bytes
);