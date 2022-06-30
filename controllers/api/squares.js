const Board = require('../../models/board');

module.exports = {
    create,
    deleteSquare
};

async function create(req, res) {
    // const board = await Board.findById(req.body.boardId).populate({path: 'squares', populate: {path: 'user'}});
    const board = await Board.findById(req.body.boardId);
    const sq = await board.squares.find(elem => elem.pos === req.body.pos)
    if (board.game_started === false && !sq) {
        await board.squares.push({user: req.user, pos: req.body.pos})
        await board.save();
    }
    if (board.squares.length === board.size) {
        board.validated = true;
        await board.save();
    }
    const square = board.squares[board.squares.length-1]
    res.json({board, square})
}

async function deleteSquare(req, res) {
    let board = await Board.findById(req.body.boardId)
    if (board.game_started === false) {
        await Board.updateOne({_id: req.body.boardId}, {$pull: {squares: {pos: req.body.pos, user: req.user}}});
        board = await Board.findById(req.body.boardId);
    };
    if (board.squares.length === board.size - 1) {
        board.validated = false;
        await board.save();
    }
    res.json({board})
}