const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')
app.use(express.json())

app.use(express.static('public'));
app.set('views', path.join(__dirname, "views"))
app.set('view engine', 'ejs')
const port = 3000 
app.use(routes)
app.listen(port, ()=>{
  console.log('START APP ON PORT 3000')
})