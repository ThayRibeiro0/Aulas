const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

// Config 
    // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

// Conexao com o banco de dados Mysql
    const sequelize = new Sequelize('test', 'suporte', 'Usbw@2951', {
    host: "10.0.0.108",
    dialect: 'mysql'
})

app.length('/cad', function(req, res){
  res.send('ROTA DE CADASTRO DE POST')  
})

app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081");
});