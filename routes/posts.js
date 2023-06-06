import express from "express";
import {
  getPosts,
  addPost,
  deletePost,
  getClubPosts,
  getClubDiscussions,
} from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/club/:adminId", getClubPosts);
router.get("/club/discussions/:targetClubId", getClubDiscussions);
router.post("/", addPost);
router.delete("/:id", deletePost);

export default router;
