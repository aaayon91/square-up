const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const squareSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    pos: {type: Number}
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})

const boardSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    homeTeam: {type: String},
    visitTeam: {type: String},
    size: {
        type: Number,
        default: 100,
        // required: true
    },
    entry: {
        type: Number,
        // required: true
    },
    // game: {type: Schema.Types.ObjectId, ref: 'Game'},
    gameRef: {type: String},
    squares: [squareSchema],
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


module.exports = mongoose.model('Board', boardSchema);