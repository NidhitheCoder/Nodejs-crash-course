const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');

// Gets all members
router.get('/', (req, res)=> res.json(members) );

// Get single member
router.get('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if(found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({msg: `No member with id ${req.params.id}`}); 
  }
});

// Create member
router.post('/', (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'Active',
  }

  if(!newMember.name || !newMember.email ) {
    return res.status(400).json({ msg: 'Please include name and email' });
  }

  members.push(newMember);
  res.json(members);
})

module.exports = router;