const express = require('express')
const cors = require('cors')
const bodyPaser = require('body-parser')
const { readdirSync } = require('fs')
const dbcon = require('./Config/dbcon')
const app = express()
const port = 5050


app.use(cors())
app.use(bodyPaser.json())


readdirSync('./Routes').map((r) => app.use('/product',require('./Routes/'+r)))


app.listen(port,()=> console.log("sever running in",port))