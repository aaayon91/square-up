const express = require('express');
const router = express.Router();
const gamesCtrl = require('../../controllers/api/games');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// GET /api/games
router.get('/', gamesCtrl.getAll);
// // POST /api/games
// router.post('/', gamesCtrl.create);
// // Delete /api/games
// router.delete('/', gamesCtrl.deleteGame);
// //Update /api/games
// router.put('/', gamesCtrl.updateGame);

module.exports = router;