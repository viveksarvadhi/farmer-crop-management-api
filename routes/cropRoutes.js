const express = require('express');
const Crop = require('../models/Crop');
const router = express.Router();

 router.post('/', async (req, res) => {
  const crop = await Crop.create(req.body);
  res.status(201).json(crop);
});

 router.get('/', async (req, res) => {
  const crops = await Crop.find().populate('farmerId');
  res.json(crops);
});

 router.put('/:id', async (req, res) => {
  const crop = await Crop.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(crop);
});

 router.delete('/:id', async (req, res) => {
  await Crop.findByIdAndDelete(req.params.id);
  res.json({ message: "Crop Deleted" });
});

module.exports = router;
