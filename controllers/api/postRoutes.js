const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {

        const newPosts = await Post.create(req.body);
        res.json(newPosts);

    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;