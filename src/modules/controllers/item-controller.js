const Spending = require('../../models/item');

const getSpendings = (req, res) => {
  try {
    Spending.find().then(result => {
      res.status(200).send(result);
    });
  } catch (error) {
    res.status(400).send('can get all items');
  }
}

const addSpending = (req, res) => {
  try {
    const { place, cost } = req.body;

    if ((place === '')
      || (typeof place !== 'string')
      || (cost === '')
      || (typeof cost !== 'number')
    ) {
      throw new Error('something is empty or wrong type');
    }

    const item = new Spending({ place, cost });
    item.save().then(result => {
      res.status(200).send(result);
    });
  } catch (error) {
    res.status(400).send('can add item');
  }
}

const editSpending = (req, res) => {
  try {
    const { place, time, cost } = req.body;
    const _id = req.params._id;

    if (!req.params.hasOwnProperty('_id') 
      || place === '' 
      || time === '' 
      || cost === ''
      || typeof place !== 'string'
      || typeof time !== 'string'
      || typeof cost !== 'number'
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
    res.status(400).send("cant edit item");
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
    res.status(400).send('cant delete item');
  }
}

module.exports = {
  getSpendings,
  addSpending,
  editSpending,
  deleteSpending
}