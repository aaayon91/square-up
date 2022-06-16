const express = require('express');
const router = express.Router();
const squaresCtrl = require('../../controllers/api/squares');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/squares
router.post('/', squaresCtrl.create);
router.delete('/', squaresCtrl.deleteSquare);

module.exports = router;