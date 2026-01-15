const express = require('express');
const Harvest = require('../models/Harvest');
const router = express.Router();

 router.post('/', async (req, res) => {
  const harvest = await Harvest.create(req.body);
  res.status(201).json(harvest);
});

 router.get('/', async (req, res) => {
  const harvests = await Harvest.find().populate('cropId');
  res.json(harvests);
});

module.exports = router;
