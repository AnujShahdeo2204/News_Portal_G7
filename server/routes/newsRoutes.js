
import express from 'express';
const router = express.Router();
import {
    getNews,
    getNewsById,
    createNews,
    updateNews,
    deleteNews,
} from '../controllers/newsController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getNews).post(protect, createNews);
router
    .route('/:id')
    .get(getNewsById)
    .put(protect, updateNews)
    .delete(protect, deleteNews);

export default router;
