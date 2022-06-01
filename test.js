const axios = require("axios");
const Game = require('./models/game');

module.exports = {
    // getAll,
    create,
};

// async function getAll(req, res) {
//     const boards = await Board.find({}).populate({path: 'squares', populate: {path: 'user'}})
//     res.json(boards)
// }

async function create(req, res) {
    // req.body.user = req.user._id;
    // console.log(req.body)
    console.log('req: ', req)
    await Game.create(req);
    // res.json(board)
    console.log('DONE!!!')
}

const options = {
    method: 'GET',
    url: 'https://odds.p.rapidapi.com/v4/sports/baseball_mlb/scores/?daysFrom=3',
    params: {all: 'true'},
    headers: {
      'X-RapidAPI-Host': 'odds.p.rapidapi.com',
      'X-RapidAPI-Key': '9e061475ffmsh484b1a3632c49c8p1f54cdjsn6ea13474326a'
    }
  };
  
  axios.request(options).then(function (response) {
    //   data = response.json()
    // console.log('response.data: ', response.data)
    //   console.log(response.data[1].scores);
    // for(const key in response.data[1]) {
        // console.log('HEEELLLLOOOOO: ', response.data[0]['scores'])
    // }
    return response.data;
  }).then(function (data) {
    //   console.log('Data: ', typeof(data))
      data.forEach(elem => {
          create(elem);
      });
  })
  .catch(function (error) {
      console.error(error);
  });