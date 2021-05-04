const server = require('./app');

server.listen(3001, (err) => {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
});