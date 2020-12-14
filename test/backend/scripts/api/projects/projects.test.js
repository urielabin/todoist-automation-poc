require('dotenv').config();

const supertest = require('supertest');

const app = 'https://api.todoist.com/rest/v1';
const request = supertest(app);

it('gets the projects endpoint', async (done) => {
  const response = await request
    .get('/projects')
    .set('Authorization', 'Bearer ' + `${process.env.API_TOKEN}`);

  expect(response.status).toBe(200);
  done();
});

it('gets the projects endpoint and receive a 400', async (done) => {
  const response = await request.get('/projects');

  expect(response.status).toBe(400);
  done();
});
