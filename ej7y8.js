const express = require("express")
const app = express()
const aleatoria = require ("./ej7function")
const array = require ("./ej7array")

app.get("/numero", function(req,res){
    let aleatorio = aleatoria()
    array[aleatoria]++
    res.send(array)
})

//-------EJERCICIO 8-------------

app.get("/borrar/:indice", function (req, res){
if (req.params.indice < array.length) {
array[req.params.indice]= 0
res.send(array)}
else{res.send("El índice no está en el array")}
})


app.listen(process.env.PORT || 3000, (e) => {
    e
    ? console.log ("Servidor no conectado")
    : console.log ("Servidor conectado y a la escucha en el puerto : " + (process.env.PORT || 3000))
})