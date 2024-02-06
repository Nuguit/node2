const express = require("express")
const app = express()



let datos: {
    nombre: ""
    apellidos: ""
    edad: 0}


app.get("/nombre/:nombre", function(req, res){
    let {nombre} = req.params
    datos.nombre = req.params.nombre
})

app.get("/apellidos/:apellidos", function(req, res){
    let {apellidos} = req.params
    datos.apellidos = req.params.apellidos
})

app.get("/edad/:edad", function(req, res){
    let {edad} = req.params
    datos.edad = req.params.edad
})




    app.listen(process.env.PORT || 3000, (e) => {
        e
        ? console.log ("Servidor no conectado")
        : console.log ("Servidor conectado y a la escucha en el puerto : " + (process.env.PORT || 3000))
    })

