const express = require("express")
const app = express()

let alumnos = ["Nuria", "Ester", "Antonio", "Maria", "Marina", "Victor", "Gloria", "Carlos", "Sergyalis", "Alexander", "Mildry", "Santiago"]


app.get ("/anyadir/:nombre", function (req, res){
    alumnos.push (req.params.nombre)
    res.send(alumnos)
})




app.listen(process.env.PORT || 3000, (e) => {
    e
    ? console.log ("Servidor no conectado")
    : console.log ("Servidor conectado y a la escucha en el puerto : " + (process.env.PORT || 3000))
})