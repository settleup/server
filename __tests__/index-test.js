const request = require('supertest');
const app = require('../src/index.js');

describe('GET /', () => {
  it('respond with json', done => {
    request(app)
      .get('/')
      .then(response => {
        expect(response.header['content-type']).toBe(
          'application/json; charset=utf-8'
        );
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe('GET /transactions', () => {
  it('respond with json', done => {
    request(app)
      .get('/transactions')
      .then(response => {
        expect(response.header['content-type']).toBe(
          'application/json; charset=utf-8'
        );
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
