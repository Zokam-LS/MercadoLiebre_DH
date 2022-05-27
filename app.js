const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname,'public')));

app.listen(3000, () =>{
    console.log('Servidor funcionando en puerto 3000');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});