const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  farmerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farmer',
    required: true
  },
  cropName: String,
  season: String,
  areaUsed: Number
});

module.exports = mongoose.model('Crop', cropSchema);
