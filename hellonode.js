// Load HTTP module
const http = require('http');

// Set the IP address and port for the server
const hostname = '127.0.0.1';
const port = 3000;

// Create HTTP server and listen for requests
const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, Node!!!!');
} )

// Start the server listening
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})