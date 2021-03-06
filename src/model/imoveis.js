const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  id_imovel: {
    type: String,
    required: true,
    unique: true
  },
  finalidade: {
    type: String,
    required: true,
    trim: true
  },
  tipo: {
    type: String,
    required: true,
    trim: true
  },
  cidade: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true
  },
  bairro: {
    type: String,
    required: true
  },
  endereco: {
    type: String,
    required: true
  },
  preco: {
    type: Number,
    required: true
  },
  dormitorio: {
    type: Number,
    required: true
  },
  garagem: {
    type: Number,
    required: true
  },
  banheiro: {
    type: Number,
    required: true
  },
  comodos: {
    type: Number,
    required: true
  },
  usuario: {
    type: String,
    required: true
  },
  sobre: {
    type: String,
    required: true
  },
  imagens: [
    {
      type: String,
      required: true
    }
  ]
});

module.exports = mongoose.model('imoveis', schema);
