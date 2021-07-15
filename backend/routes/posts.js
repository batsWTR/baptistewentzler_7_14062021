const express = require('express');
const parser = require('body-parser');
const posts_ctrl = require('../controller/posts')
const auth = require('../middleware/auth');



const router = express.Router();

router.use(posts_ctrl.headers);
router.get('/posts',posts_ctrl.getPosts)
router.get('/postsById/:catId', posts_ctrl.getPostsById)
router.get('/users', posts_ctrl.getUsers)
router.get('/categories', posts_ctrl.getCat)
router.post('/addCategory',auth, posts_ctrl.addCategory)
router.post('/createPost',auth, posts_ctrl.createPost)
router.post('/addComment',auth, posts_ctrl.addComment)
router.get('/comment/:id', posts_ctrl.getComment)





module.exports = router;