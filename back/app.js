const Koa = require('koa');
const BodyParser = require('koa-bodyparser');
//const Router = require('koa-router');
const Logger = require('koa-logger');
//const serve = require('koa-static');
//const mount = require('koa-mount');
const cors = require('koa-cors');
//const HttpStatus = require('http-status');
const home = require('./routes/index');
const users = require('./routes/users');
const films = require('./routes/films');

const app = new Koa();

app.use(BodyParser());
app.use(Logger());
app.use(cors());
app.use(home.routes());
app.use(users.routes());
app.use(films.routes());
app.listen(3001);
