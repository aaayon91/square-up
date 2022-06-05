const Game = require('../../models/game');
const Board = require('../../models/board')
const axios = require("axios");

module.exports = {
  getAll,
};

async function getAll(req, res) {
  // const games = await Game.find({scores: null})
  const games = await Game.find({started: false})
  res.json(games)
}

async function create(req, res) {
  let game = await Game.findOne({id: req.id}).exec()
  // console.log(game)
  // If game ended since last api call, update game
  if ((game && !game.completed) && req.completed) {
    game.completed = req.completed;
    game.scores = req.scores;
    game.last_update = req.last_update;
    await game.save();
    console.log('UPDATED 1!!!')
    updateBoards(game);
  // If no change to game, leave alone
  } else if ((game && ((!game.completed && !req.completed) || (game.completed && req.completed))) || (!game && req.scores)) {
  // If this is a new game, save to DB
  console.log('REMAINED THE SAME')
  } else {
    let game = await Game.create(req);
    console.log('GAME CREATED!!: ', game);
    console.log('req.commence_time: ', game.commence_time);
    let timeInterval =  new Date(game.commence_time) - new Date(Date.now());
    console.log(timeInterval)
    setTimeout(() => validateBoards(game), timeInterval)
  }
}

async function updateBoards(game) {
  console.log('gameRef: ', game.id)
  await Board.updateMany({ gameRef: game.id }, { homeScore: game.scores[0]['score'], visitScore: game.scores[1]['score'] });
  //Delete game from database after all boards have been updated
  // deleteGames(game)
}

// async function deleteGames(game) {
//   await Game.deleteOne({_id: game._id});
// }

//This function validates that each board is complete based on the associated game start time.
//Any board that is not complete will be considered invalid
function validateBoards(game) {
  async function setGameStarted(game) {
    game.started = true;
    await game.save();
    console.log(game)
    await Board.updateMany({ gameRef: game.id }, { game_started: true });
    console.log("Set Game Started to True!!!!")
  }
  setGameStarted(game)
}

const options = {
  method: 'GET',
  url: 'https://odds.p.rapidapi.com/v4/sports/baseball_mlb/scores/?daysFrom=3',
  params: {all: 'true'},
  headers: {
    'X-RapidAPI-Host': 'odds.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.API_KEY
  }
};

function fetchGames() {
  axios.request(options).then(function (response) {
    return response.data;
  }).then(function (data) {
    data.forEach(elem => {
        create(elem);
    });
  })
  .catch(function (error) {
    console.error(error);
  });
}

fetchGames();