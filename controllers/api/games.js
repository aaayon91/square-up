const Game = require('../../models/game');

module.exports = {
    getAll,
};

async function getAll(req, res) {
    const games = await Game.find({}).populate({path: 'squares', populate: {path: 'user'}})
    res.json(games)
}