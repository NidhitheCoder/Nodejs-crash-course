const express = require('express');
const router = express.Router();
// Getting All
router.get('/', (req, res) => {
  res.send('Hello world');
});
// Getting One
router.get('/:id', (req, res) => {
  res.send(req.params.id);
});
// Creating One
router.post('/', (req, res) => {});
// Updating one
router.patch('/:id', (req, res) => {});
// Deleting One
router.delete('/:id', (req, res) => {});

module.exports = router;