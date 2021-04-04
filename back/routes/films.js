const Router = require('koa-router');
const router = new Router();
const HttpStatus = require('http-status');

router.get('/catalog', async (ctx) => {
    const films = require('./../test/films.json');
    ctx.status = HttpStatus.OK;
    ctx.body = films;
});

module.exports = router;
