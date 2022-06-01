const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    homeTeam: {type: String},
    visitTeam: {type: String},
    size: {
        type: Number,
        default: 100
    },
    entry: {
        type: Number
    },
    homeScore: {
        type: Number
    },
    visitScore: {
        type: Number
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})


module.exports = mongoose.model('Game', gameSchema);