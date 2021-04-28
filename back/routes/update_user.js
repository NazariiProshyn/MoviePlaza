const { changeUserInfo } = require('../queries/update_user_queries');

function routes(fastify, opts, done) {
    fastify.post('/updateprofile', async (request) => {
        const { firstname, secondname, bdate, favourgenre, login } = JSON.parse(
            request.body
        );
        console.log(request.body);
        await changeUserInfo(firstname, secondname, bdate, favourgenre, login);
    });
    done();
}
module.exports = routes;
