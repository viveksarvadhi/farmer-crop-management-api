const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const http = require('http');
const https = require('https');
const fs = require('fs');

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use('/api/farmers', require('./routes/farmerRoutes'));
app.use('/api/crops', require('./routes/cropRoutes'));
app.use('/api/harvests', require('./routes/harvestRoutes'));

app.get('/', (req, res) => {
  res.send("Farmer API Running");
});

http.createServer(app).listen(3000, () => {
  console.log("HTTP Server running on 3000");
});

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

https.createServer(options, app).listen(3443, () => {
  console.log("HTTPS Server running on 3443");
});
