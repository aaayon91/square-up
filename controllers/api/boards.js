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
    const board = await Board.create(req.body);
    res.json(board)
}

async function deleteBoard(req, res) {
    await Board.remove({_id: req.body.board_id});
    const boards = await Board.find({}).populate({path: 'squares', populate: {path: 'user'}})
    res.json(boards)
}

async function updateBoard(req, res) {
    // console.log(req.body, 'HIIIIIII!!!')
    const board = await Board.findById(req.body.board_id)
    // console.log(board);
    board.homeScore = Math.floor(Math.random() * 10);
    board.visitScore = Math.floor(Math.random() * 10);
    await board.save();
    // console.log(board)
    res.json(board)
}

// async function create(req, res) {
//     const board = await Board.findById(req.body.board._id).populate({path: 'squares', populate: {path: 'user'}});
//     board.squares.push({user: req.user, pos: req.body.pos})
//     await board.save();
//     const square = board.squares[board.squares.length-1]
//     res.json({board, square})
// }