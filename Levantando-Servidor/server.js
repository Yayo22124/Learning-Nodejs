// Importar modulo 'http'
const http = require('http');

// Crear servidor HTTP
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('¡Hola, mundo!');
  });

// Especificar puerto de escucha
server.listen(3000, () => {
    console.log('El servidor está escuchando en el puerto 3000');
})