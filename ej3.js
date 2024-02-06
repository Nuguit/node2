const express = require("express")
const app = express()



let nombres = ["Leia", "Luke", "Anakin","Kylo", "Han"]

app.get ("/personas", function(req, res){
    res.send(nombres)
})

app.get ("/personas/:nombre", function (req, res){
    let nombre = req.params.parametro;
    res.send (nombre)
})



app.listen(process.env.PORT || 3000, (e) => {
    e
    ? console.log ("Servidor no conectado")
    : console.log ("Servidor conectado y a la escucha en el puerto : " + (process.env.PORT || 3000))
})