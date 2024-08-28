import request from 'supertest';
import app from '../src/app';

describe('GitHub API Endpoints', () => {
  it('should fetch my repositories', async () => {
    const res = await request(app).get('/api/repos/my');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('length');
  });

  it('should search repositories by name', async () => {
    const res = await request(app).get('/api/repos/search?q=test');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('length');
  });

  it('should fetch favorite repositories', async () => {
    const res = await request(app).get('/api/repos/favorites');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should add a repository to favorites', async () => {
    const res = await request(app).post('/api/repos/favorites').send({ name: 'test-repo' });
    expect(res.statusCode).toEqual(201);
  });
});
