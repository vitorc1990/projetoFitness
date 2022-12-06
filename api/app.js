var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/homePage.html");
})

app.get("/dicas", function(req, res) {
    res.sendFile(__dirname + "/public/dicas.html")
})

app.get("/dicas/dicasdesaude", function(req, res) {
    res.sendFile(__dirname + "/public/dicasDeAlimentacao.html");
})

app.get("/dicas/dicasdeexercicio", function(req, res) {
    res.sendFile(__dirname + "/public/dicasDeExercicio.html");
})

app.get("/calculadora", function(req, res) {
    res.sendFile(__dirname + "/public/calculadoras.html");
})

app.get("/calculadora/agua", function(req, res) {
    res.sendFile(__dirname + "/public/agua.html");
})

app.get("/calculadora/imc", function(req, res) {
    res.sendFile(__dirname + "/public/imc.html");
})

app.get("/calculadora/tmb", function(req, res) {
    res.sendFile(__dirname + "/public/tmb.html");
})

app.get("/calculadora/proteinas", function(req, res) {
    res.sendFile(__dirname + "/public/proteinas.html");
})

app.get("/calculadora/carboidratos", function(req, res) {
    res.sendFile(__dirname + "/public/carboidratos.html");
})

app.get("/calculadora/agua/calculadoraagua", function(req, res) {
    res.sendFile(__dirname + "/public/calculadoraAgua.html");
})

app.get("/calculadora/imc/calculadoraimc", function(req, res) {
    res.sendFile(__dirname + "/public/calculadoraImc.html");
})

app.get("/calculadora/tmb/calculadoratmb", function(req, res) {
    res.sendFile(__dirname + "/public/calculadoraTmb.html");
})

app.get("/calculadora/proteinas/calculadoraProteinas", function(req, res) {
    res.sendFile(__dirname + "/public/calculadoraProteinas.html");
})

app.get("/calculadora/carboidratos/calculadoraCarboidratos", function(req, res) {
    res.sendFile(__dirname + "/public/calculadoraCarboidratos.html");
})

app.get("/calculadora/get", function(req, res) {
    res.sendFile(__dirname + "/public/get.html");
})

app.get("/calculadora/get/calculadoraget", function(req, res) {
    res.sendFile(__dirname + "/public/calculadoraGet.html");
})

app.listen(4000, function(error) {
    if (error) {
        console.log("Erro ao iniciar")
    }else {
        console.log(`App exemplo escutando na porta http://localhost:${4000}/`);
    }
});