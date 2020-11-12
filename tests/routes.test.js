const request = require('supertest');
const server = require('../src/index.js');

beforeAll(async () => {
});

afterAll(() => {
    server.close();
});
describe('basic route tests', () => {
    test('get home route GET /', async () => {
        const response = await request(server).get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toContain('Hello World!');
    });
});