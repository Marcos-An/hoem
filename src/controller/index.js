const mongoose = require('mongoose');
const action = require('../actions');

exports.get = async (req, res) => {
  try {
    var data = await action.get();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.post = async (req, res) => {
  try {
    await action.create(req.body);
    res.status(201).send({ mensagem: 'Imovel adicionado' });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.put = (req, res) => {
  action.update(req, res);
};

exports.delete = (req, res) => {
  action.remove(req, res);
};
exports.getById = (req, res) => {
  action.ById(req, res);
};
