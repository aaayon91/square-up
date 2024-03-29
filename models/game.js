const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    id: {type: String},
    sport_key: {type: String},
    sport_title: {type: String},
    commence_time: {type: String},
    started: {
        type: Boolean,
        default: false
    },
    completed: {type: Boolean},
    home_team: {type: String},
    away_team: {type: String},
    scores: Array,
    last_update: {type: String}
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})


module.exports = mongoose.model('Game', gameSchema);