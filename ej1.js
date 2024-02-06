const express = require("express")
const app = express()

app.get("/", function(req, res){
res.send(" <h1>Hola Mundo</h1>" + "desde Express")})


app.listen(process.env.PORT || 3000, (e) => {
    e
    ? console.log ("Servidor no conectado")
    : console.log ("Servidor conectado y a la escucha en el puerto : " + (process.env.PORT || 3000))
})