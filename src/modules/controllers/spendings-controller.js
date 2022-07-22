const Spending = require('../../models/spending');
const {
  stringValidation,
  numberValidation
} = require('../../helpers/validation');

const getSpendings = (req, res) => {
  try {
    Spending.find().then(result => {
      res.status(200).send(result);
    });
  } catch (error) {
    res.status(400).send('can get all spendings');
  }
}

const addSpending = (req, res) => {
  try {
    const { place, cost } = req.body;

    if (!stringValidation(place) || !numberValidation(cost)) {
      throw new Error('something is empty or wrong type');
    }

    const spending = new Spending({ place, cost });
    spending.save().then(result => {
      res.status(200).send(result);
    });
  } catch (error) {
    res.status(400).send('can add spending');
  }
}

const editSpending = (req, res) => {
  try {
    const { place, time, cost } = req.body;
    const _id = req.params._id;

    if (!req.params.hasOwnProperty('_id') 
      || !stringValidation(place)
      || !stringValidation(time)
      || !numberValidation(cost)
    ) {
      throw new Error('unable to update text');
    }

    Spending.findOneAndUpdate(
      { _id }, 
      { $set: { place, time, cost } },
      { new: true }
    ).then(result => {
      res.status(200).send(result);
    });
  } catch (error) {
    res.status(400).send('cant edit spending');
  }
}

const deleteSpending = (req, res) => {
  try { 
    if (!req.params.hasOwnProperty('_id')) {
      throw new Error('id is unreachable to read');
    }

    const _id = req.params._id;
    
    Spending.findOneAndDelete({ _id }).then(result => {
      res.status(200).send(result);
    })
  } catch (error) {
    res.status(400).send('cant delete spending');
  }
}

module.exports = {
  getSpendings,
  addSpending,
  editSpending,
  deleteSpending
};