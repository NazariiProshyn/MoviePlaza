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
    test('user image is awailable', async () => {
        const res = await request('http://127.0.0.1:3001/').get('images/user.png');
        expect(res.body).toBeDefined();
        expect(res.statusCode).toEqual(200);
        expect(res.headers['content-type']).toEqual('image/png');
    });
    test('film is awailable', async () => {
        const res = await request('http://127.0.0.1:3001/').get('videos/FilmName1.mp4');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeDefined();
        expect(res.headers['content-type']).toEqual('video/mp4');
        expect(res.headers['accept-ranges']).toEqual('bytes');
        //expect(res.headers).toHaveProperty('content-length');
    });
    test('filmpage is awailable', async () => {
        const res = await request('http://127.0.0.1:3001/').get('catalog/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeDefined();
        expect(res.body).toHaveProperty('filmname');
        expect(res.body).toHaveProperty('genres');
        expect(res.body).toHaveProperty('comments');
        expect(res.body.genres).toContain('Комедия');
        expect(res.body.comments[0]).toHaveProperty('comments');
    });
    test('filter is work', async () => {
        const res = await request('http://127.0.0.1:3001/').get('catalog?value=&genre=%D0%9A%D0%BE%D0%BC%D0%B5%D0%B4%D0%B8%D1%8F&yearfrom=1997&yearto=2020&lenfrom=70&lento=130&pricefrom=&priceto=5&ratefrom=3&rateto=');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeDefined();
        for (let i = 0; i < res.body.length; i++){
            expect(Number(res.body[i].rate)).toBeGreaterThanOrEqual(3);
            expect(Number(res.body[i].dateofrelease)).toBeGreaterThanOrEqual(1997);
            expect(Number(res.body[i].dateofrelease)).toBeLessThanOrEqual(2020);
            expect(Number(res.body[i].duration)).toBeGreaterThanOrEqual(70);
            expect(Number(res.body[i].duration)).toBeLessThanOrEqual(130);
            expect(Number(res.body[i].price)).toBeLessThanOrEqual(5);
        }
    });
    test('search is work', async () => {
        const res = await request('http://127.0.0.1:3001/').get('catalog?value=%D0%A1%D0%B5%D0%BC%D0%B5%D0%B9%D0%BA%D0%B0');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeDefined();
        for (let i = 0; i < res.body.length; i++){
            expect(res.body[i]).toHaveProperty('filmname');
            expect(res.body[i].filmname.toLowerCase()).toMatch(/семейка/);
        }
    });
    test('user profile is awailable', async () => {
        const res = await request('http://127.0.0.1:3001/').get('profile/dukrainets');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeDefined();
        expect(res.body).toHaveProperty('userid');
        expect(res.body.userid).toEqual(3);
    });
    test('user data is awailable', async () => {
        const res = await request('http://127.0.0.1:3001/').get('users/3');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeDefined();
        expect(res.body).toHaveProperty('userid');
        expect(res.body.userid).toEqual(3);
        expect(res.body).toHaveProperty('login');
        expect(res.body.login).toEqual('dukrainets');
    });
});