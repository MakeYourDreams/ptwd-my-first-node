const myChalk = require('chalk');
const myHttp = require('http');
require('dotenv').config();

console.log(myChalk.blue('Blue badadeedadadadoo'))

const myServer =myHttp.createServer((req, res) => {
    console.log(`Requested URL is: ${req.url}`)
    if (req.url === '/') {
        res.write('You requested localhost:3000 my friend!');
        res.end();
        } else if (req.url === '/ptwd102019'){
            res.write("Adam");
            res.end();
        } else {
            res.write("This page dont exist go away");
            res.end("test end 123");
        }
});

myServer.listen(process.env.PORT, () => console.log('I am on port ' + process.env.PORT));

// myServer.listen(3000, () => console.log('I am on port 3000!'));



// myHttp.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World! Cake is a lie ');
// }).listen(8080);