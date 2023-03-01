const http = require('http'); //calls the http library
// create the server using http library
const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });//set the content header
  response.end('Hello World\n'); //send the string to the response
});

server.listen(3000);// make the server listen on port 7000