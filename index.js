import express from "express";
import { connectMongoDB } from "./connections.js";
import chalk from "chalk";
import { urlRouter } from "./routes/url.js";
import { handleGetRedirectedUrl } from "./controllers/url.js";
const PORT = 8000;
const app = express();

app.listen(PORT, () => {
  return console.log(chalk.blue(`Server has been connected! on Port: ${PORT}`));
});

connectMongoDB("mongodb://127.0.0.1:27017/url-shortener");
app.use(express.json());
app.use("/", urlRouter);
app.get("/:shortId", async (req,res)=>{
  console.log('get route starts!');
  return handleGetRedirectedUrl(req,res);
})
