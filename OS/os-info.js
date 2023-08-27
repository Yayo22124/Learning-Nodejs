// Programa para mostrar información del sistema operativo usando Node.js

// Imporamos el modulo nativo de Node.js 'os'
const os = require('node:os');

console.log('Información del Sistema Operativo: ');

console.log('--------------------------------------');

console.log('Nombre del Sistema Operativo: ', os.platform());
console.log('Versión del Sistema Operativo: ', os.release());
console.log('Arquitectura: ', os.arch());
// console.log('Uptime: ', os.uptime() / 60);
console.log('Memoria Total: ', os.totalmem() / 1024 / 1024, 'MB');
console.log('Memoria Libre: ', os.freemem() / 1024 / 1024, 'MB');
console.log('CPUs: ', os.cpus());