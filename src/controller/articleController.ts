import { Request, Response } from "express";
import articleService from "../services/articleService";

export class ArticleController {
  static async createArticle(req: Request, res: Response) {
    try {
      const { nickname, title, content } = req.body; // Extracting the payload from the body

      if (!nickname || !title || !content) {
        return res.status(400).json({ error: "Some Fields are Missing" });
      }

      const message = await articleService.createArticle(
        nickname,
        title,
        content
      );

      res.json({
        success: true,
        message: message,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async getArticles(req: Request, res: Response) {
    const page = req.query.page as string;

    try {
      const results = await articleService.getAllArticles(page);

      res.json({
        success: true,
        message: "Got the all articles",
        data: results,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async getOnlyArticleContent(req: Request, res: Response) {
    try {
      const articleId = req.params.id; // Extracting the id parameter from the URL

      const results = await articleService.getArticleContent(articleId);

      console.log("results", results);

      res.json({
        success: true,
        message: "Got an single article content",
        data: results,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default ArticleController;
