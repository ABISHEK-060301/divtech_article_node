import supertest from 'supertest';
import app from '../src/app';

describe('Comment API', () => {
  it('should get all comments for an article', async () => {
    const response = await supertest(app).get('/comments/15'); // Assuming article ID 1
    expect(response.status).toBe(200);
    // Add more assertions based on your API response format
  });

  it('should create a new comment', async () => {
    const newComment = {
      articleId: 15, // Assuming article ID 1
      content: 'This is a new comment',
      nickname: 'John Doe',
    };

    const response = await supertest(app)
      .post('/comments/15')
      .send(newComment);

      expect(response.status).toBe(200);

    // Add more assertions based on your API response format
  });

  it('should create a reply to a comment', async () => {
    const replyComment = {
      commentId: 2, // Assuming article ID 1
      content: 'This is a reply comment',
      nickname: 'Jane Doe',
    };

    const response = await supertest(app)
      .post(`/comments/commentreply/${replyComment.commentId}`)
      .send(replyComment);

      expect(response.status).toBe(200);

    // Add more assertions based on your API response format
  });
});
