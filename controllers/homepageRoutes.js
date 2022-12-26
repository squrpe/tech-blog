const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
    try {
        
        const postData = await Post.findAll({ include : [User] });

        const posts = postData.map(post => post.get({ plain : true }));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        })

    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    } res.render('login')
})

module.exports = router;