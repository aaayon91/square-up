const Board = require('../../models/board');
const Game = require('../../models/game');

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
    console.log('req.body.gameRef: ', req.body.gameRef)
    let game = await Game.findOne({'id': req.body.gameRef}).exec()
    req.body.homeTeam = game.home_team
    req.body.visitTeam = game.away_team
    console.log(req.body)
    console.log('game: ', game)
    const board = await Board.create(req.body);
    // const board = new Board(req.body);
    // board.save(function(err) {
    //     if (err) return res.redirect('/boards/new');
    //     // console.log(movie);
    //     // res.redirect(`/movies/${movie._id}`);
    // });
    res.json(board)
}

async function deleteBoard(req, res) {
    await Board.deleteOne({_id: req.body.board_id});
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