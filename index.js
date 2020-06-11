const express = require('express')
const app = express();

const myJWS = require('./components/jws')

app.use(express.json());

app.use('/jws', myJWS);

const server = app.listen(8000, () => {
  console.log(`iniciado en ${server.address().port}`)
})