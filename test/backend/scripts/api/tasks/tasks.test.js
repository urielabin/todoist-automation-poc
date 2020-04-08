require('dotenv').config();

const supertest = require('supertest');

const request = supertest(`${process.env.API_URL}`);

// eslint-disable-next-line no-undef
it('gets the projects endpoint with a succesful response', async done => {
  const response = await request
    .get('/tasks')
    // eslint-disable-next-line no-useless-concat
    .set('Authorization', 'Bearer ' + `${process.env.API_TOKEN}`);

  // eslint-disable-next-line no-undef
  expect(response.status).toBe(200);
  done();
});

// eslint-disable-next-line no-undef
it('gets the projects endpoint and receives a 400', async done => {
  const response = await request.get('/tasks');

  // eslint-disable-next-line no-undef
  expect(response.status).toBe(400);
  done();
});
