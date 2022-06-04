const Board = require('../../models/board');

module.exports = {
    create,
};

async function create(req, res) {
    const board = await Board.findById(req.body.board._id).populate({path: 'squares', populate: {path: 'user'}});
    board.squares.push({user: req.user, pos: req.body.pos})
    await board.save();
    if (board.squares.length === board.size) {
        board.validated = true;
        await board.save();
    }
    const square = board.squares[board.squares.length-1]
    res.json({board, square})
}