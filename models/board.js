const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const squareSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    // homeScore: {
    //     type: Number
    // },
    // visitScore: {
    //     type: Number
    // }
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
        default: 100
    },
    entry: {
        type: Number
    },
    squares: [squareSchema],
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})


module.exports = mongoose.model('Board', boardSchema);