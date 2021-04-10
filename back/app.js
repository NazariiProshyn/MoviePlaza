//const Koa = require('koa');
//const HttpStatus = require('http-status');
//const fs = require('fs');
const fastify = require('fastify')({
    logger: true,
});

fastify.register(require('./routes/index'));
fastify.register(require('./routes/filmImg'));
fastify.register(require('./routes/films'));
fastify.register(require('./routes/users'));
fastify.register(require('./routes/videos'));
/*
const BodyParser = require('koa-bodyparser');
const Logger = require('koa-logger');
const cors = require('koa-cors');
const home = require('./routes/index');
const users = require('./routes/users');
const films = require('./routes/films');
const video = require('./routes/videos');
const filmsImg = require('./routes/filmImg');
const app = new Koa();

app.use(BodyParser());
app.use(Logger());
app.use(cors());
app.use(home.routes());
app.use(users.routes());
app.use(films.routes());
app.use(video.routes());
app.use(filmsImg.routes());
*/
const start = async () => {
    try {
        await fastify.listen(3001);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
