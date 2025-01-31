const express = require('express');
const { createUser, getUser } = require('../controllers/user.controller');

const router = express.Router();

router.get("/user", getUser)
router.post("/user", createUser)


module.exports = router