const jws = require('jws');
const crypto = require('crypto');
const fs = require('fs')

function getEncodedRequest(body) {
  return new Promise((res, rej)=> {
    fs.readFile('rsa.private', (err, data)=>{
      if(err){
        rej('error al leer rsa private key')
      }
      const information = {
          header: { alg: 'RS256' },
          privateKey: crypto.createPrivateKey(data.toString()),
          payload: body
        };
  
      jws.createSign(information)
          .on('data', (signature)=> {
             res({signature})
            })
          .on('error', (err)=> {
            console.log('hubo un error')
            console.error(err)
          })
    })
  });
}

function verifySign(body) {
  return new Promise((res, rej)=> {
    fs.readFile('rsa.public', (err, data)=> {
      if(err){
        rej('No se pudo leer rsa public')
      }

      jws.createVerify({
        publicKey: data.toString(),
        signature: body.signature,
        algorithm: 'RS256'
      }).on('done', (verified, obj)=>{
        console.log(verified)
        console.log(obj)
        if(verified){
          res('ok')
        }
        rej('no es un request valido')
      }).on('error', (error)=> {
        console.log(error);
        rej('Error al validar la firma')
      })
    })
  })
}

module.exports = {
  getEncodedRequest,
  verifySign
}
