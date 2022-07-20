require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const apiRoutes = require('./src/modules/routes/spendings-router');

app.use(cors());

app.use(express.json());
app.use('/', apiRoutes);

const launch = () => {
  try {
    mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true });
    app.listen(8000, () => {
      console.log('connected to port 8000');
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

launch();