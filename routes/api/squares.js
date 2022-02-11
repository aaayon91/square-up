const express = require('express');
const router = express.Router();
const squaresCtrl = require('../../controllers/api/squares');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/squares
router.post('/', squaresCtrl.create);

module.exports = router;