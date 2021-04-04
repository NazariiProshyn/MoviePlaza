const Router = require('koa-router');
const router = new Router();
const HttpStatus = require('http-status');
const fs = require('fs');
router.get('/images/:name', async (ctx) => {
    const name = ctx.params.name;
    const films = fs.createReadStream('./images/' + name);
    // + name);
    ctx.status = HttpStatus.OK;
    ctx.response.set('content-type', 'image/png');
    ctx.body = films;
});

module.exports = router;
