
const express = require('express')
const router = express.Router()
const controller = require('./controller');
const { createSign } = require('jws');

router.post('/', (req, res) => {
  controller.getEncodedRequest(req.body).then(data => {
    res.status(200).send(data);
  }).catch(error => {
    res.status(500).send(error);
  })
});

router.post('/validate', (req, res) => {
  controller.verifySign(req.body)
  .then(data => {
    res.status(200).send(data)
  } ).catch(error => {
    res.status(500).send(error)
  })
});

module.exports = router