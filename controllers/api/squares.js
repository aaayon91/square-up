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
    // req.body.user = req.user._id;
    // const board = await Board.create(req.body);
    // console.log(board)
    // res.json(board)
}






// function create(req, res) {
//     Ticker.findById(req.params.id, function(err, ticker) {
//         ticker.transactions.push(req.body)
//         ticker.save(function(err) {
//             res.redirect(`/tickers/${ticker._id}`)
//         })
//     })
// }

// async function deleteBoard(req, res) {
//     console.log('Delete Board!!!!!')
//     // console.log(req.body.board_id)
//     await Board.remove({_id: req.body.board_id});
//     console.log("board deleted!!!")
//     const boards = await Board.find({})
//     res.json(boards)
// }

// function deleteTicker(req, res, next) {
//     Ticker.findById(req.params.id).then(function (ticker) {
//         ticker.remove();
//         res.redirect('/tickers');
//     })
// }
