const mongoose = require('mongoose');

const maisonSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    prices: Number,
});

module.exports = mongoose.model('Maison', maisonSchema);