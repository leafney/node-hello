// A Nodejs demo web app for show login user and hostname

const http = require('http');
const os = require('os');
const ip = '0.0.0.0';
const port = 8080;
const hostname = os.hostname();
const whoami = os.userInfo().username || 'Anonymous';
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hi, I am ${whoami}, from ${hostname}.\n`);
});
server.listen(port, ip, () => {
    console.log(`Server running at http://${ip}:${port}/`);
});