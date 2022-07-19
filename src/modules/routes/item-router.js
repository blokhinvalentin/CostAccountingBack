const express = require('express');
const router = express.Router();

const {
  getItems,
  addItem,
  editItem,
  deleteItem
} = require('../controllers/item-controller');

router.get('/items', getItems);
router.post('/items', addItem);
router.patch('/items/:_id', editItem);
router.delete('/items/:_id', deleteItem);

module.exports = router;