import express from "express";
import {
  getTopics,
  postTopic,
  getTopic,
  updateTopic,
  deleteTopic,
} from "../controllers/topicController.js";
import { catchErrors } from "../helpers.js";
const router = express.Router();

router.get("/api/topics", catchErrors(getTopics));
router.get("/api/topic/:id", catchErrors(getTopic));
router.patch("/api/topic/:id", catchErrors(updateTopic));
router.delete("/api/topic/:id", catchErrors(deleteTopic));
router.post("/api/topic", catchErrors(postTopic));

export default router;
