const Game = require('../../models/game');
const Board = require('../../models/board')
const axios = require("axios");
const http = require("http");

module.exports = {
  getAll,
};

async function getAll(req, res) {
  // const games = await Game.find({scores: null})
  const games = await Game.find({started: false, completed: false})
  res.json(games)
}

async function create(req, res) {
  let game = await Game.findOne({id: req.id}).exec()
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
    console.log("No Change")
  // If this is a new game, save to DB
  } else {
    let timeInterval =  new Date(req.commence_time) - new Date(Date.now());
    if (timeInterval > 0) {
      let game = await Game.create(req);
      console.log('GAME CREATED!!: ', game);
      // let timeInterval =  new Date(game.commence_time) - new Date(Date.now());
      setTimeout(() => validateBoards(game), timeInterval)
    }
  }
}

async function updateBoards(game) {
  console.log('gameRef: ', game.id)
  await Board.updateMany({ gameRef: game.id }, { homeScore: game.scores[0]['score'], visitScore: game.scores[1]['score'] });
  //Delete game from database after all boards have been updated
  // deleteGames(game)
}

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

// async function deleteGames(game) {
//   await Game.deleteOne({_id: game._id});
// }

//API CALLS:
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
      elem.commence_time = new Date(elem.commence_time).toLocaleString();
      create(elem);
    });
  })
  .catch(function (error) {
    console.error(error);
  });
}

// setInterval(() => fetchGames(), 10800000) //every 3 hours
// fetchGames();

//Keep Heroku awake
setInterval(function() {
  http.get("http://square-up-app.herokuapp.com");
}, 1500000); // every 25 minutes