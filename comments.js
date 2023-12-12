// Create web server
const server = http.createServer((req, res) => {
    res.end('Hello World!');
});
// Listen on port 8080
server.listen(8080);
console.log('Server listening on port 8080');

// Path
