module.exports = {
    getAll,
};

async function getAll(req, res) {
    const boards = await Board.find({}).populate({path: 'squares', populate: {path: 'user'}})
    res.json(boards)
}