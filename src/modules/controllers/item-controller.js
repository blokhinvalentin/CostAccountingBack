const Item = require('../../models/item');

const getItems = (req, res) => {
  try {
    Item.find().then(result => {
      res.status(200).send(result);
    });
  }
  catch(error) {
    res.status(400).send('can get all items');
  }
}

const addItem = (req, res) => {
  try {
    const { where, when, cost } = req.body;

    if (where === '' || cost === '') {
      throw new Error('something is empty');
    }

    const item = new Item({ where, when, cost });
    item.save().then(() => {
      getItems(req, res);
    });
  }
  catch(error) {
    res.status(400).send('can add item');
  }
}

const editItem = (req, res) => {
  try {
    const { _id, where, when, cost } = req.body;
    if (!req.body.hasOwnProperty('_id') || where === '' || when === '' || cost === '') {
      throw new Error('unable to update text');
    }

    Item.updateOne(
      { _id }, 
      { $set: { where: where, when: when, cost: cost } }
      ).then(() => {
      getItems(req, res);
    });
  }
  catch(error) {
    res.status(400).send("cant edit item");
  }
}

const deleteItem = (req, res) => {
  try { 
    if (!req.body.hasOwnProperty('_id')) {
      throw new Error('id is unreachable to read');
    }

    const _id = req.body._id;
    
    Item.deleteOne({ _id }).then(result => {
      res.status(200).send(result);
    })
  }
  catch(error) {
    res.status(400).send('cant delete item');
  }
}

module.exports = {
  getItems,
  addItem,
  editItem,
  deleteItem
}