const mongoose = require('mongoose');

const { Schema } = mongoose;

const spendingsSchema = new Schema({
  where: { 
    type: String,
    required: true
  },
  when: {
    type: Date  ,
    default: Date.now()
  },
  cost: {
    type: Number,
    required: true
  }
});

module.exports = Spending = mongoose.model('MySpendings', spendingsSchema);