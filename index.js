// 'use restrict';
// const http = require('http');

// const server= http.createServer(function(req,res){
//     res.writeHead(200, {'content-type': 'text/plain'});
//     res.end('Hola mundo');
// });

// server.listen(5000);

const express = require('express') //require es igual a import 
const app = express()
const port = 3000

app.get('/',(req,res) =>{ //request y response
    res.send('Hola Mundo spy estebitan') //usamos el request cuando necesitamos jalar cualquier tipo de informacion 
})

app.listen(port, () =>{
    console.log('la app se esta ejecutando por el puerto '+`${port}`)
})