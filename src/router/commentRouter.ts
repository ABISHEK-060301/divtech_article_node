import express from "express";
import commentController from "../controller/commentController";

const router = express.Router();

router.post("/:articleId", commentController.createCommentArticle);
router.get("/:articleId", commentController.getAllArticleComments);
router.post(
  "/commentreply/:commentId",
  commentController.createCommentOnComment
);

export default router;
