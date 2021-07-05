const express = require('express');
const parser = require('body-parser');
const posts_ctrl = require('../controller/posts')




const router = express.Router();

router.use(posts_ctrl.headers);
router.get('/posts',posts_ctrl.getPosts)
router.get('/users', posts_ctrl.getUsers)
router.post('/createPost', posts_ctrl.createPost)





module.exports = router;