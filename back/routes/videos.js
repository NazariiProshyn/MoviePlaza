const Router = require('koa-router');
const router = new Router();
const fs = require('fs');

router.get('/videos/1', async (ctx) => {
    const path = './videos/testvideo.mp4';
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = ctx.request.headers.range;
    if (range) {
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunksize = end - start + 1;
        const file = fs.createReadStream(path, { start, end });
        ctx.set('Content-Type', 'video/mp4');
        ctx.set('Content-Range', `bytes ${start}-${end}/${fileSize}`);
        ctx.set('Accept-Ranges', 'bytes');
        ctx.set('Content-Length', chunksize);
        ctx.set('Cache-Control', 'no-cache');
        console.log(206);
        ctx.status = 206;
        ctx.body = file;
        console.log(ctx.head);
    } else {
        ctx.set('Content-Type', 'video/mp4');

        ctx.set('Accept-Ranges', 'bytes');
        ctx.set('Content-Length', fileSize);
        ctx.set('Cache-Control', 'no-cache');

        console.log(200);
        ctx.status = 200;
        ctx.body = fs.createReadStream(path);
        console.log(ctx.head);
    }
});

module.exports = router;
