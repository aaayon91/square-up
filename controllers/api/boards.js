const Board = require('../../models/board');

module.exports = {
    getAll,
};

async function getAll(req, res) {
    const boards = await Board.find({})
    res.json(boards)
}