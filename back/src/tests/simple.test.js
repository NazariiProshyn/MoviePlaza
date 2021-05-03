/* eslint-disable no-undef */
const request = require('supertest');
describe('routes test', () => {
    test('new film is awailable', async () => {
        const res = await request('http://127.0.0.1:3001/').get('newfilms');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeDefined();
        expect(res.body.length).toEqual(6);
        expect(res.body[0]).toHaveProperty('filmname');

    });
});