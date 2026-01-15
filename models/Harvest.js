const mongoose = require('mongoose');

const harvestSchema = new mongoose.Schema({
  cropId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Crop',
    required: true
  },
  quantity: Number,
  pricePerKg: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Harvest', harvestSchema);
