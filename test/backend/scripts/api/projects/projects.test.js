require('dotenv').config();

const supertest = require('supertest');

const app = 'https://api.todoist.com/rest/v1';
const request = supertest(app);

// eslint-disable-next-line no-undef
it('gets the projects endpoint', async done => {
  const response = await request
    .get('/projects')
    // eslint-disable-next-line no-useless-concat
    .set('Authorization', 'Bearer ' + `${process.env.API_TOKEN}`);

  // eslint-disable-next-line no-undef
  expect(response.status).toBe(200);
  done();
});

// eslint-disable-next-line no-undef
it('gets the projects endpoint and receive a 400', async done => {
  const response = await request.get('/projects');

  // eslint-disable-next-line no-undef
  expect(response.status).toBe(400);
  done();
});
