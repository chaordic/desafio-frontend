const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/desafio-brewery-linx'));

app.get('/*', (req,res) =>{
    res.sendFile(__dirname + 'dist/desafio-brewery-linx/index.html');
})

app.listen(PORT, () =>{
    console.log('server started');
})