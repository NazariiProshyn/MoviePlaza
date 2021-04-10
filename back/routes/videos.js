const fs = require('fs');

async function routes(fastify) {
    fastify.get('/videos/:file', async (request, reply) => {
        const videoname = request.params.file;
        const path = './videos/' + videoname;
        const videolist = videoname.split('.');
        const videotype = videolist[videolist.length - 1];
        console.log(videoname);
        console.log(videolist);
        const stat = fs.statSync(path);
        const fileSize = stat.size;
        const range = request.headers.range;
        console.log(range);
        if (range) {
            const parts = range.replace(/bytes=/, '').split('-');
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
            const chunksize = end - start + 1;
            const file = fs.createReadStream(path, { start, end });
            reply.headers({
                'Content-Type': 'video/' + videotype,
                'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': chunksize,
                'Cache-Control': 'no-cache',
            });
            reply.type('video/mp4');
            reply.code(206);
            return file;
        } else {
            reply.headers({
                'Content-Type': 'video/' + videotype,
                'Accept-Ranges': 'bytes',
                'Content-Length': fileSize,
                'Cache-Control': 'no-cache',
            });

            reply.status = 200;
            return fs.createReadStream(path);
        }
    });
}
module.exports = routes;
