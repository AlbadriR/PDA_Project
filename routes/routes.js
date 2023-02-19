import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import {
  getTopics,
  postTopic,
  getTopic,
  updateTopic,
  deleteTopic,
} from "../controllers/topicController.js";
import { catchErrors } from "../helpers.js";
const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
router.get("/api/topics", catchErrors(getTopics));
router.get("/api/topic/:id", catchErrors(getTopic));
router.patch("/api/topic/:id", catchErrors(updateTopic));
router.delete("/api/topic/:id", catchErrors(deleteTopic));
router.post("/api/topic", catchErrors(postTopic));
router.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

export default router;
