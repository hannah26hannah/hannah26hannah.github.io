const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/get/data', controller.api.getData);
router.post('/send/pw', controller.api.sendPw);
router.post('/add/post', controller.api.addPost)

module.exports = router;
