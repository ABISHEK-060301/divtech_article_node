import express from "express";
import ArticleController from "../controller/articleController";

const router = express.Router();

router.get("/", ArticleController.getArticles);
router.get("/:id", ArticleController.getOnlyArticleContent);
router.post("/createArticle", ArticleController.createArticle);

export default router;
