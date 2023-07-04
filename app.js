const express = require('express');
const msg = require('./mod_teste');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.send('home/index');
});

app.get('/formulario_inclucao_noticia', (req, res)=>{
    res.render('admin/form_add_noticia');
});

app.get('/noticias', (req, res)=>{
    res.send('noticias/noticias');
});

app.get('/beleza', (req, res)=>{
    res.send("<html><body><h1>Beleza</h1><body></html>");
});

app.listen(3333,()=>{
    console.log('servidor online');
    console.log('http://localhost:3333');
    console.log(msg());
});