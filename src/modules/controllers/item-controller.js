const Spending = require('../../models/item');

const getItems = (req, res) => {
  try {
    Spending.find().then(result => {
      res.status(200).send(result);
    });
  } catch (error) {
    res.status(400).send('can get all items');
  }
}

const addItem = (req, res) => {
  try {
    const { where, cost } = req.body;

    if ((where === '') || (typeof where !== 'string')
    || (cost === '') || (typeof cost !== 'number')) {
      throw new Error('something is empty');
    }

    const item = new Spending({ where, cost });
    item.save().then(() => {
      res.status(200).send(item);
    });
  } catch (error) {
    res.status(400).send('can add item');
  }
}

const editItem = (req, res) => {
  try {
    const { _id, where, when, cost } = req.body;

    if (!req.body.hasOwnProperty('_id') 
      || where === '' 
      || when === '' 
      || cost === ''
      || typeof where !== 'string'
      || typeof cost !== 'string'
    ) {
      throw new Error('unable to update text');
    }

    Spending.findOneAndUpdate(
      { _id }, 
      { $set: { where, when, cost } },
      { new: true }
      ).then(result => {
        res.status(200).send(result);
    });
  } catch (error) {
    res.status(400).send("cant edit item");
  }
}

const deleteItem = (req, res) => {
  try { 
    if (!req.body.hasOwnProperty('_id')) {
      throw new Error('id is unreachable to read');
    }

    const _id = req.body._id;
    
    Spending.deleteOne({ _id }).then(result => {
      res.status(200).send(result);
    })
  } catch (error) {
    res.status(400).send('cant delete item');
  }
}

module.exports = {
  getItems,
  addItem,
  editItem,
  deleteItem
}