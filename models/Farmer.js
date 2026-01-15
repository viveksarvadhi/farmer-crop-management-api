const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  village: { type: String, required: true },
  mobile: String,
  landArea: Number
});

module.exports = mongoose.model('Farmer', farmerSchema);
