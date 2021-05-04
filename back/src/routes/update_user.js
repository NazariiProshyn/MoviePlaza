const { changeUserInfo } = require('../queries/update_user_queries');

function routes(fastify, opts, done) {
    fastify.post('/updateprofile', async (request) => {
        const pool = require('./../queries/pool');
        let newuserdata;
        try {
            newuserdata = JSON.parse(request.body);
        } catch (error) {
            newuserdata = request.body;
        }
        const {
            firstname,
            secondname,
            bdate,
            favourgenre,
            login,
        } = newuserdata;

        await changeUserInfo(
            firstname,
            secondname,
            bdate,
            favourgenre,
            login,
            pool
        );
        return { success: 'true' };
    });
    done();
}
module.exports = routes;
