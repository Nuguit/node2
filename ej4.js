const express = require("express")
const app = express()
let saludo = require("./ej4app")
const saludarEnExpress = require("./ej4app")



app.get("/saludar", function (req, res){
    res.send(saludarEnExpress(req.params.nombre))
} 
)


app.listen(process.env.PORT || 3000, (e) => {
    e
    ? console.log ("Servidor no conectado")
    : console.log ("Servidor conectado y a la escucha en el puerto : " + (process.env.PORT || 3000))
})