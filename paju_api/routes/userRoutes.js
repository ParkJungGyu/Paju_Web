const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET /users
router.get('/', userController.loginUser);

// POST /users
router.post('/', userController.registerUser);

module.exports = router;