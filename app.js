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

app.listen(4000, function(error) {
    if (error) {
        console.log("Erro ao iniciar")
    }else {
        console.log(`App exemplo escutando na porta http://localhost:${4000}/`);
    }
});