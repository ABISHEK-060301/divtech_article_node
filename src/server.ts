import express from "express";
import bodyParser from "body-parser";
import articleRouter from "./router/articleRouter";
import commentRouter from "./router/commentRouter";
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  // TO check the server is running or not
  res.send("Hii welcome to abishek DB!!!");
});

app.use("/article", articleRouter);
app.use("/comment", commentRouter);

const port = 5050;

app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;
