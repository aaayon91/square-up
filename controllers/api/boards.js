const Board = require('../../models/board');

module.exports = {
    getAll,
    create,
    deleteBoard,
    updateBoard
};

async function getAll(req, res) {
    const boards = await Board.find({}).populate({path: 'squares', populate: {path: 'user'}})
    res.json(boards)
}

async function create(req, res) {
    req.body.user = req.user._id;
    console.log(req.body)
    const board = await Board.create(req.body);
    res.json(board)
}

async function deleteBoard(req, res) {
    await Board.remove({_id: req.body.board_id});
    const boards = await Board.find({}).populate({path: 'squares', populate: {path: 'user'}})
    res.json(boards)
}

async function updateBoard(req, res) {
    const board = await Board.findById(req.body.board_id)
    board.homeScore = Math.floor(Math.random() * 10);
    board.visitScore = Math.floor(Math.random() * 10);
    await board.save();
    res.json(board)
}