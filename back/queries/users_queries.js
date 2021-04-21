const client = require('./client');

const getUser = (request, reply, id) => {
    client.query(
        `SELECT * from "UserInformation" WHERE "UserId"=${id}`,
        async (error, results) => {
            if (error) {
                throw error;
            }
            reply.send(results.rows[0]);
        }
    );
};

module.exports = { getUser };
