const http = require("http");
const port = 5000;

//http.Agent()
//Keep scocket alive to avoid reconnecting for every request.
const agent = new http.Agent({keepAlive: true});
//get method send request from client
http.get('http://google.com',{agent},(res)=>
{
    console.log("Status : "+ res.statusCode);
});



//http.request()
//represent outgoing HTTP request
const req = http.request({hostname: 'google.com', path: '/', method: 'POST'}, 
    res.on('data', chunk=>console.log(chunk.toString())));
req.write("Hello server");
req.end();



//http.createServer()
//create http server
const server = http.createServer((req,res)=>
{
    res.statusCode=200;
    res.setHeader("Content-Type", 'text/plain');
    res.end("Hello");
});




server.listen(port,()=>console.log("server running on port "+port));