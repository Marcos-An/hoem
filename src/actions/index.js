const mongoose = require('mongoose');
const Imoveis = mongoose.model('imoveis');

exports.get = async () => {
  const res = await Imoveis.find({});
  return res;
};

exports.create = async data => {
  var imoveis = new Imoveis(data);
  await imoveis.save();
};

exports.update = async (req, res) => {
  Imoveis.findByIdAndUpdate(req.params.id, {
    $set: {
      tipo: req.body.tipo
    }
  })
    .then(() => res.status(200).send({ mensagem: 'Atualizado' }))
    .catch(e => {
      res.status(400).send({ erro: e });
    });
};

exports.remove = async (req, res) => {
  Imoveis.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).send({ mensagem: 'removido' }))
    .catch(e => {
      res.status(400).send({ erro: e });
    });
};

exports.ById = async (req, res) => {
  Imoveis.findOne({
    id_imovel: req.params.id_imovel
  })
    .then(data => res.status(200).send(data))
    .catch(e => {
      res.status(400).send({ erro: e });
    });
};

exports.ByTag = async (req, res) => {
  Imoveis.find({
    finalidade: req.params.finalidade
  })
    .then(data => res.status(200).send(data))
    .catch(e => {
      res.status(400).send({ erro: e });
    });
};
