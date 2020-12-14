require('dotenv').config();

const supertest = require('supertest');

const request = supertest(`${process.env.API_URL}`);

it('gets the projects endpoint with a succesful response', async (done) => {
  const response = await request
    .get('/tasks')
    .set('Authorization', 'Bearer ' + `${process.env.API_TOKEN}`);

  expect(response.status).toBe(200);
  done();
});

it('gets the projects endpoint and receives a 400', async (done) => {
  const response = await request.get('/tasks');

  expect(response.status).toBe(400);
  done();
});
