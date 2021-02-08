const express = require('express')
const routes = express.Router()
const indexControllers = require('./controllers/indexControllers')


routes.get('/',indexControllers.index)
routes.get('/galery', indexControllers.galery)
routes.get('/about', indexControllers.about)
routes.get('/contact', indexControllers.contact)
module.exports = routes