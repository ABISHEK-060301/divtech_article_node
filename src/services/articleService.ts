import pool from "../config/dbConnection";
import { Article } from "../models/articleModels";

export class ArticleService {
  static async createArticle(
    nickname: string,
    title: string,
    content: string
  ): Promise<string> {
    try {
      const currentDate = new Date();
      const newDate = currentDate.toISOString();
      const query =
        "INSERT INTO articlelist (nickname, title, content, creationDate) VALUES (?, ?, ?, ?)";
      const values = [nickname, title, content, newDate];

      return new Promise((resolve, reject) => {
        pool.query(query, values, (error, results, fields) => {
          if (error) {
            return reject(error);
          } else {
            resolve("Created an article");
          }
        });
      });
    } catch (error) {
      throw error;
    }
  }

  static async getAllArticles(pagenumber: string): Promise<Article[]> {
    try {
      const offset = (parseInt(pagenumber) - 1) * 20;
      return new Promise((resolve, reject) => {
        pool.query(
          `SELECT * from articlelist LIMIT 20 OFFSET ${offset} ;`,
          (error, results, fields) => {
            if (error) {
              return reject(error);
            } else {
              resolve(results);
            }
          }
        );
      });
    } catch (error) {
      throw error;
    }
  }

  static async getArticleContent(articleId: string): Promise<string> {
    try {
      return new Promise((resolve, reject) => {
        const query = "SELECT * FROM articlelist WHERE id = ?";

        pool.query(query, [articleId], (error, results, fields) => {
          if (error) {
            return reject(error);
          } else {
            const { content } = results[0];
            resolve(content);
          }
        });
      });
    } catch (error) {
      throw error;
    }
  }
}

export default ArticleService;
