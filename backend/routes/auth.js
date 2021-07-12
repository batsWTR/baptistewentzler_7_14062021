const express = require('express');
const parser = require('body-parser');
const authCtrl = require('../controller/auth');
const auth = require('../middleware/auth');
const upload_file = require('../middleware/upload');


const router = express.Router();


router.use(authCtrl.headers);
router.post('/signup', authCtrl.signup);
router.post('/login',authCtrl.login);
router.put('/updateProfile',auth, upload_file, authCtrl.updateProfile);
router.delete('/deleteUser/:id',auth, authCtrl.deleteUser)
router.use(authCtrl.error);




module.exports = router;