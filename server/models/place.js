const mongoose = require('mongoose');
const Float = require('mongoose-float').loadType(mongoose);

const placeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    lan: { type: Float },
    long: { type: Float }
  
});

module.exports = mongoose.model('place', placeSchema);