const Board = require('../../models/board');

module.exports = {
    getAll,
    create,
    deleteBoard
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

function deleteBoard(req, res) {
    console.log('Delete Board!!!!!')
    console.log(board._id)
}

// function deleteTicker(req, res, next) {
//     Ticker.findById(req.params.id).then(function (ticker) {
//         ticker.remove();
//         res.redirect('/tickers');
//     })
// }