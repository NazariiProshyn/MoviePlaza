const Router = require('koa-router');
const router = new Router();
const HttpStatus = require('http-status');

router.get('/users', async (ctx) => {
    const books = require('./../test/users.json');
    ctx.status = HttpStatus.OK;
    ctx.body = books;
});

module.exports = router;
