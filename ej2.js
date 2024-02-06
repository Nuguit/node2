const express = require("express")
const app = express()


function numeroAleatorio(num){
    return Math.floor(math.random() * num) + 1
}


app.get("/numero/:numero ", function (req, res){
    let numero = req.params.numero;
    res.send(numeroAleatorio(numero))
})



app.listen(process.env.PORT || 3000, (e) => {
    e
    ? console.log ("Servidor no conectado")
    : console.log ("Servidor conectado y a la escucha en el puerto : " + (process.env.PORT || 3000))
})