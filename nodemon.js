const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Bem-vindos ao meu app!");
});

app.get("/sobre", function(req,res){
    res.send("Bem-vindos a minha página sobre");
});

app.get("/blog", function(req,res){
    res.send("Bem-vindo ao meu blog!");
});

app.get("/ola/:nome/:cargo/:cor", function(req,res){
    res.send("<h1>Ola "+req.params.nome+"</h1>"+"<h2>Seu cargo e: "+req.params.cargo+"</h2>"+"<h3>Sua cor favorita e: "+req.params.cargo+"</h3>");
});

app.listen(8081, function(){console.log("Servidor Rodando!");});