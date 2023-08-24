// Importamos http
const { write } = require('fs');
const http = require('http');
// Importamos el módulo que creamos
const suma = require('./suma.js')

// levantamos servidor
const server = http.createServer((req, res) => {
    if (req.url === '/sumar') {
        const resultado = suma(5, 3); // Utilizamos la función del módulo matematicas.js
        res.write(`La suma es: ${resultado}`);
        res.end();
    } else {
        res.write('Ruta no válida');
        res.end();
    }
});

// Poner el servidor en escucha
server.listen(3000, () => {
    console.log('El servidor está escuchando en el puerto 3000: http://localhost:3000/');
});