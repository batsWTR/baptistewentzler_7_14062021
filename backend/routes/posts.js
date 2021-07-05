const express = require('express');
const parser = require('body-parser');
const posts_ctrl = require('../controller/posts')




const router = express.Router();

router.use(posts_ctrl.headers);
router.get('/',posts_ctrl.getPosts)





module.exports = router;