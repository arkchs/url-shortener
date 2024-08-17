import express from "express";
import {
  handleGetShortenedUrl,
} from "../controllers/url.js";
export const urlRouter = express.Router();
urlRouter.route("/").post(handleGetShortenedUrl);

