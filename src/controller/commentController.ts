import { Request, Response } from "express";
import CommentService from "../services/commentService";
import pool from "../config/dbConnection";

class CommentController {
  static async createCommentArticle(req: Request, res: Response) {
    try {
      const articleId = req.params.articleId; // Extracting the article id from the URL
      const { nickname, comment } = req.body;

      const results = await CommentService.createCommentOnArticle(
        articleId,
        nickname,
        comment
      );

      res.json({
        success: true,
        message: results,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async getAllArticleComments(req: Request, res: Response) {
    try {
      const articleId = req.params.articleId; // Extracting the id parameter from the URL
      const results = await CommentService.getAllArticleComments(articleId);

      res.json({
        success: true,
        message: "Fetched all comment of an article",
        data: results,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async createCommentOnComment(req: Request, res: Response) {
    const commentId = req.params.commentId;
    const { nickname, comment } = req.body;

    try {
      const results = await CommentService.createCommentOnAComment(
        commentId,
        nickname,
        comment
      );

      res.json({
        success: true,
        message: results,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default CommentController;
