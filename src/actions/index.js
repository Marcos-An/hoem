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
