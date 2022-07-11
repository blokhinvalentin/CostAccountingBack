const express = require('express');
const router = express.Router();

const {
  getItems,
  addItem,
  editItem,
  deleteItem
} = require('../controllers/item-controller');

router.get('/allItems', getItems);
router.post('/newItem', addItem);
router.patch('/editItem', editItem);
router.delete('/deleteItem', deleteItem);

module.exports = router;