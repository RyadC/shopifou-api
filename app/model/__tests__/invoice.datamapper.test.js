// EXTERNAL MODULES
import 'dotenv/config';
import { default as request }  from 'supertest';
// import pg from 'pg';

// INTERNAL MODULES
import app from '../../app';


const URL = `http://${process.env.HOST}:${process.env.PORT}`;

test('adds 1 + 2 to equal 3', () => {
  expect(1+2).toBe(3);
});


describe('Invoice request tests', () => {

  describe('GET /invoice', () => {

    test('It should respond with 200 success',  () => {
      return request(app)
        .get(`/invoice`)
        .expect(200);
    })
  })
})