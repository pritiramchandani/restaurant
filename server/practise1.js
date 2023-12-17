const http = require('node:http');
// Host name is host as localhost
const hostname = '127.0.0.1';
const port = 3000;

// Their we use http.createserver for create a server with port.

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});