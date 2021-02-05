const express = require('express')
const routes = express.Router()
const indexControllers = require('./controllers/indexControllers')


routes.get('/',indexControllers.index)
routes.get('/galery', indexControllers.galery)

module.exports = routes