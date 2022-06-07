const Board = require('../../models/board');
const Game = require('../../models/game');

module.exports = {
    getAll,
    getOne,
    create,
    deleteBoard,
    // updateBoard
};

async function getAll(req, res) {
    const boards = await Board.find({}).populate({path: 'squares', populate: {path: 'user'}})
    res.json(boards)
}

async function getOne(req, res) {
    const board = await Board.findById(req.params.boardId).populate({path: 'squares', populate: {path: 'user'}})
    res.json(board)
}

async function create(req, res) {
    req.body.user = req.user._id;
    let game = await Game.findOne({'id': req.body.gameRef}).exec()
    req.body.homeTeam = game.home_team
    req.body.visitTeam = game.away_team
    if (game.started === false) {
        const board = await Board.create(req.body);
        res.json(board)
    }
}

async function deleteBoard(req, res) {
    await Board.deleteOne({_id: req.body.board_id});
    const boards = await Board.find({}).populate({path: 'squares', populate: {path: 'user'}})
    res.json(boards)
}