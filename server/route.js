const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/get/data', controller.api.getData);
router.get('/get/post', controller.api.getPost);
// router.get('/get/post_cnt', controller.api.getPostCnt);
router.post('/send/pw', controller.api.sendPw);
router.post('/add/post', controller.api.addPost)

module.exports = router;
