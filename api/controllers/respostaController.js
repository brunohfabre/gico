const Resposta = require('../models/resposta');

const respostaController = {};

respostaController.get = function(req, res) {
    Resposta.find({}).then(function(respostas) {
        res.send(respostas);
    }).catch(function(err) {
        res.send(err);
    });
};

respostaController.post = function(req, res) {
    Resposta.create(req.body).then(function(resposta) {
        res.send(resposta);
    }).catch(function(err) {
        res.send(err);
    });
};

module.exports = respostaController;
