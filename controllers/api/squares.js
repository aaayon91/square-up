const Board = require('../../models/board');

module.exports = {
    create,
};

async function create(req, res) {
    // console.log(req.body)
    // console.log(req.user)
    // const board = await Board.find({_id: req.body._id});
    const board = await Board.findById(req.body.board._id).populate({path: 'squares', populate: {path: 'user'}});
    console.log(board, "THIS IS BOAAAAAAARD")
    board.squares.push({user: req.user, pos: req.body.pos})
    await board.save();
    console.log(board.squares.length)
    console.log(board.squares[board.squares.length-1])
    const square = board.squares[board.squares.length-1]
    // const boards = await Board.find({})
    res.json({board, square})
    // req.body.user = req.user._id;
    // const board = await Board.create(req.body);
    // console.log(board)
    // res.json(board)
}

