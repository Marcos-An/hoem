const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  try {
    res.status(200).send({
      title: 'api de imóves hoem, use a vontade :D'
    });
  } catch (error) {
    res.send({ erro: 'Houve um erro', numero: error });
  }
});

module.exports = router;
