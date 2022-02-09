const express = require('express');
const router = express.Router();
const boardsCtrl = require('../../controllers/api/boards');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// GET /api/boards
router.get('/', boardsCtrl.getAll);
// POST /api/boards
router.post('/', boardsCtrl.create);

module.exports = router;