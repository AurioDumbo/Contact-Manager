const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const rotas = require('./routes/route')
const errorHandler = require("./middleware/errorHandler")
const port = process.env.PORT || 5000

app.use(express.json())
app.use(errorHandler)
app.use("/contacto",rotas)

app.listen(port, () =>{
    console.log(`Server rodando na porta: ${port}`)
})
