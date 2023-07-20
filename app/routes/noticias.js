const dbConnection  = require('../../config/dbConnection');

module.exports = (app) => {

    const connection = dbConnection();

    app.get('/noticias', (req, res) => {

        connection.query('select * from noticias', (erro, result) => {
            res.render('noticias/noticias', {noticias: result});
        });
    
    });
};
