const Board = require('../../models/board');

module.exports = {
    getAll,
    create
};

async function getAll(req, res) {
    const boards = await Board.find({})
    res.json(boards)
}

async function create(req, res) {
    console.log('HIIIII')
    req.body.user = req.user._id;
    const board = await Board.create(req.body);
    console.log(board)
    res.json(board)
}