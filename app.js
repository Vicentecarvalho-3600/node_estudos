const app = require('./config/server');

const rotasNoticias = require('./app/routes/home')(app);

const rotahome = require('./app/routes/noticias')(app);

const rotaformInclucao = require('./app/routes/formulario_inclucao_noticia')(app);

app.listen(3333,()=>{
    console.log('servidor online');
    console.log('http://localhost:3333');
});