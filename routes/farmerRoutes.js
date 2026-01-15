const express = require('express');
const Farmer = require('../models/Farmer');
const router = express.Router();

 router.post('/', async (req, res) => {
  const farmer = await Farmer.create(req.body);
  res.status(201).json(farmer);
});

 router.get('/', async (req, res) => {
  const farmers = await Farmer.find();
  res.json(farmers);
});

 router.get('/:id', async (req, res) => {
  const farmer = await Farmer.findById(req.params.id);
  res.json(farmer);
});

 router.put('/:id', async (req, res) => {
  const farmer = await Farmer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(farmer);
});

 router.delete('/:id', async (req, res) => {
  await Farmer.findByIdAndDelete(req.params.id);
  res.json({ message: "Farmer Deleted" });
});

module.exports = router;
