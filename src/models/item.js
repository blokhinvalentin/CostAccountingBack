const mongoose = require('mongoose');

const { Schema } = mongoose;

const spendingsSchema = new Schema({
  place: { 
    type: String,
    required: true
  },
  time: {
    type: Date,
    default: Date.now()
  },
  cost: {
    type: Number,
    required: true
  }
});

module.exports = Spending = mongoose.model('Spendings', spendingsSchema);