import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js'; // named Import

const router = express.Router();
router.get('/', getPosts);
router.post('/', createPost);

export default router;
