const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema({
  where: String,
  when: String,
  cost: Number
});

module.exports = Item = mongoose.model('Items', itemSchema);