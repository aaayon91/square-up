const Game = require('../../models/game');
const axios = require("axios");

module.exports = {
  getAll,
};

async function getAll(req, res) {
  const games = await Game.find({scores: null})
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
  // If no change to game, leave alone
  } else if (game && !req.completed) {
  // If this is a new game, save to DB
  } else await Game.create(req);
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
  
// axios.request(options).then(function (response) {
//   return response.data;
// }).then(function (data) {
//   data.forEach(elem => {
//       create(elem);
//   });
// })
// .catch(function (error) {
//   console.error(error);
// });

  