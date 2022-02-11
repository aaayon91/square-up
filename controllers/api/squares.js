const Board = require('../../models/board');

module.exports = {
    create,
};

async function create(req, res) {
    // console.log(req.body)
    // console.log(req.user)
    // const board = await Board.find({_id: req.body._id});
    const board = await Board.findById(req.body._id);
    board.squares.push({user: req.user})
    await board.save();
    console.log(board.squares.length)
    // const boards = await Board.find({})
    res.json(board)
    // req.body.user = req.user._id;
    // const board = await Board.create(req.body);
    // console.log(board)
    // res.json(board)
}