import express from 'express';

import { getPosts } from '../controllers/posts.js'; // named Import

const router = express.Router();
router.get('/', getPosts);
export default router;