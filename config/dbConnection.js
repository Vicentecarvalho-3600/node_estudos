const mysql = require('mysql');

const connMysql = () => {
    console.log("conexao com com base de dados estabelecida");
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias'
    });
}

module.exports = ()=> {
    return connMysql;
};