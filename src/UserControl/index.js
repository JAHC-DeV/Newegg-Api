const express = require('express');
const router = express.Router();
const {loginController,registerController} = require('./Controllers/userControllers');

router.post('/register',registerController.post);




module.exports = router;