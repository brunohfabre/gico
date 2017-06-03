const express = require('express');

const respostaController = require('./controllers/respostaController');

const routes = express.Router();

// Rotas Unit
routes.get('/respostas', respostaController.get);
routes.post('/respostas', respostaController.post);

module.exports = routes;
