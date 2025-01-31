const express = require('express');
const { createTask, getAllTask, SingleUserTask } = require('../controllers/task.controller');

const router = express.Router();

router.post("/task", createTask)
router.get("/task", getAllTask)
router.get("/task/:id", SingleUserTask)


module.exports = router