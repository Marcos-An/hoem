const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({
    itle: 'api de imóves hoem, use a vontade :D'
  });
});

module.exports = router;
