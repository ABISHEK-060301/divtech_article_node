import supertest from 'supertest';
import app from '../src/app';

describe('Article API', () => {
  it('should get all articles', async () => {
    const response = await supertest(app).get('/articles');
    expect(response.status).toBe(200);
    // Add more assertions based on your expected response
  });

  it('should get an article by ID', async () => {
    const articleId = 15; // replace with a valid article ID
    const response = await supertest(app).get(`/articles/${articleId}`);
    expect(response.status).toBe(200);
    // Add more assertions based on your expected response
  });

  it('should create a new article', async () => {
    const newArticle = {
      nickname: 'testuser',
      title: 'Test Article',
      content: 'This is a test article.'
     
    };

    const response = await supertest(app)
      .post('/articles/addArticle')
      .send(newArticle);

    expect(response.status).toBe(200);
  });
});
