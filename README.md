# JWS Practica

Referencia: https://www.npmjs.com/package/jws

### Installation

Requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd jwsPractice
$ npm install -d
```
Crear llaves: http://lunar.lyris.com/help/lm_help/12.0/Content/generating_public_and_private_keys.html (rsa.private, rsa.public)

Iniciar servidor: 
```sh
$ npm run start
```
# Usage

```
POST | http://localhost:8000/jws | Body: {...}
Response: {"signature": ....}
```

```
POST | http://localhost:8000/jws/validate |  {"signature": ....}
Response: ok
```
### Plugins

Para esta práctica se usaron: 

| Plugin | README |
| ------ | ------ |
| JWS | https://www.npmjs.com/package/jws |
| Express | https://www.npmjs.com/package/express |
| nodemon | https://www.npmjs.com/package/nodemon |

