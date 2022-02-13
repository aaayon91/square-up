const Board = require('../../models/board');

module.exports = {
    getAll,
    create,
    deleteBoard
};

async function getAll(req, res) {
    const boards = await Board.find({}).populate({path: 'squares', populate: {path: 'user'}})
    res.json(boards)
}

async function create(req, res) {
    req.body.user = req.user._id;
    const board = await Board.create(req.body);
    res.json(board)
}

async function deleteBoard(req, res) {
    await Board.remove({_id: req.body.board_id});
    const boards = await Board.find({}).populate({path: 'squares', populate: {path: 'user'}})
    res.json(boards)
}