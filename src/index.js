const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port,() => {
    console.log(`Escuchando en puerto ${port}`)
})

async function main() {
    await mongoose.connect(process.env.URI_MONGO);
    console.log('Conexion exitosa a BD')
}

main().catch((err) => console.log(err));