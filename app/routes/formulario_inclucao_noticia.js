module.exports = (app) => {
    app.get('/formulario_inclucao_noticia', (req, res)=>{
        res.render('admin/form_add_noticia');
    });
};

