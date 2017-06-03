const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const respostaSchema = new Schema({
    answer: { type: String, required: true },
});

module.exports = mongoose.model('Resposta', respostaSchema);
