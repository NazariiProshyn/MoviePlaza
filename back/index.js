const app = require('./app');

app.listen(3001, (err) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
});