const { changeUserInfo } = require('../queries/update_user_queries');

function routes(fastify, opts, done) {
    fastify.post('/updateprofile', async (request) => {
        const pool = require('./../queries/pool');
        const { firstname, secondname, bdate, favourgenre, login } = JSON.parse(
            request.body
        );

        await changeUserInfo(firstname, secondname, bdate, favourgenre, login, pool);
    });
    done();
}
module.exports = routes;
