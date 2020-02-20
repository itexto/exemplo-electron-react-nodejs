var express = require('express');
var router = express.Router();

const mysql = require('mysql')

router.get('/', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'o host da magia!',
        user: 'seu super usuário com poderes místicos!',
        password: 'sua senha super secreta',
        database: 'o banco de dados!'
    })
    
    let result = [];

    connection.query("select * from blog_post order by id desc limit 10", (err, rows) => {
        if (err) {
            res.send("Erro: " + err)
        } else {
            res.send(rows)
        }
        
    })


})

module.exports = router;