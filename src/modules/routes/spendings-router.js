const express = require('express');
const router = express.Router();

const {
  getSpendings,
  addSpending,
  editSpending,
  deleteSpending
} = require('../controllers/item-controller');

router.get('/spendings', getSpendings);
router.post('/spendings', addSpending);
router.patch('/spendings/:_id', editSpending);
router.delete('/spendings/:_id', deleteSpending);

module.exports = router;