
import asyncHandler from 'express-async-handler';
import News from '../models/News.js';

// @desc    Get all news
// @route   GET /api/news
// @access  Public
const getNews = asyncHandler(async (req, res) => {
    const news = await News.find({});
    res.json(news);
});

// @desc    Get single news by ID
// @route   GET /api/news/:id
// @access  Public
const getNewsById = asyncHandler(async (req, res) => {
    const news = await News.findById(req.params.id);

    if (news) {
        res.json(news);
    } else {
        res.status(404);
        throw new Error('News not found');
    }
});

// @desc    Create a news article
// @route   POST /api/news
// @access  Private
const createNews = asyncHandler(async (req, res) => {
    const { title, content, category, image } = req.body;

    const news = new News({
        user: req.user._id,
        title,
        content,
        category,
        image,
    });

    const createdNews = await news.save();
    res.status(201).json(createdNews);
});

// @desc    Update a news article
// @route   PUT /api/news/:id
// @access  Private
const updateNews = asyncHandler(async (req, res) => {
    const { title, content, category, image } = req.body;

    const news = await News.findById(req.params.id);

    if (news) {
        if (news.user.toString() !== req.user._id.toString() && !req.user.isAdmin) {
            res.status(401);
            throw new Error('Not authorized to update this news');
        }

        news.title = title || news.title;
        news.content = content || news.content;
        news.category = category || news.category;
        news.image = image || news.image;

        const updatedNews = await news.save();
        res.json(updatedNews);
    } else {
        res.status(404);
        throw new Error('News not found');
    }
});

// @desc    Delete a news article
// @route   DELETE /api/news/:id
// @access  Private
const deleteNews = asyncHandler(async (req, res) => {
    const news = await News.findById(req.params.id);

    if (news) {
        if (news.user.toString() !== req.user._id.toString() && !req.user.isAdmin) {
            res.status(401);
            throw new Error('Not authorized to delete this news');
        }

        await news.deleteOne();
        res.json({ message: 'News removed' });
    } else {
        res.status(404);
        throw new Error('News not found');
    }
});

export { getNews, getNewsById, createNews, updateNews, deleteNews };
