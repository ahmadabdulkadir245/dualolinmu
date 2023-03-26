const express = require('express')
const postRoutes= require('../controllers/post')

// import {
//   addPost,
//   deletePost,
//   getPost,
//   getPosts,
//   updatePost,
// } from "../controllers/post.js";

const router = express.Router();

router.get("/", postRoutes.getPosts);
router.get("/:id", postRoutes.getPost);
router.post("/add-post", postRoutes.addPost);
router.delete("/:id", postRoutes.deletePost);
router.put("/:id", postRoutes.updatePost);

module.exports = router
