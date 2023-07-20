module.exports = (app) => {

    app.get('/noticias', (req, res) => {

        const mysql = require('mysql');

        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'portal_noticias'
        });

        connection.query('select * from noticias', (erro, result) => {
            res.render('noticias/noticias', {noticias: result});
        });
        
        
        
    });
};
