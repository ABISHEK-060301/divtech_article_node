import pool from "../config/dbConnection";

class CommentService {
  static async createCommentOnArticle(
    articleId: string,
    nickname: string,
    comment: string
  ): Promise<string> {
    try {
      const currentDate = new Date();
      const newDate = currentDate.toISOString();

      const query =
        "INSERT INTO comment (articleId, nickname, comment, creationDate) VALUES (?, ?, ?, ?)";
      const values = [articleId, nickname, comment, newDate];

      return new Promise((resolve, reject) => {
        pool.query(query, values, (error, results, fields) => {
          if (error) {
            return reject(error);
          } else {
            resolve("Created a comment for an article");
          }
        });
      });
    } catch (error) {
      throw error;
    }
  }

  static async getAllArticleComments(articleId: string): Promise<
    {
      comment: string;
      nickname: string;
    }[]
  > {
    try {
      const query = "SELECT comment,nickname FROM comment WHERE articleId = ?";

      return new Promise((resolve, reject) => {
        pool.query(query, [articleId], (error, results, fields) => {
          if (error) {
            return reject(error);
          } else {
            resolve(results);
          }
        });
      });
    } catch (error) {
      throw error;
    }
  }

  static async createCommentOnAComment(
    commentId: string,
    nickname: string,
    comment: string
  ): Promise<string> {
    try {
      const currentDate = new Date();
      const newDate = currentDate.toISOString();

      const query =
        "INSERT INTO comment_on_comment (commentId, nickname, comment, creationDate) VALUES (?, ?, ?, ?)";
      const values = [commentId, nickname, comment, newDate];

      return new Promise((resolve, reject) => {
        pool.query(query, values, (error, results, fields) => {
          if (error) {
            return reject(error);
          } else {
            resolve("Fetched all comment of an article");
          }
        });
      });
    } catch (error) {
      throw error;
    }
  }
}

export default CommentService;
