const express = require('express');
const router = express.Router();
const Subscriber = require('../model/subscriber');


// Getting All
router.get('/', async (req, res) => {
  // res.send('Hello world');
  try {
    const subscribers = await Subscriber.find();
    res.status(200).json(subscribers)
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});


// Getting One
router.get('/:id', getSubscribers, (req, res) => {
  res.send(res.subscriber.name);
});


// Creating One
router.post('/', async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscriberToChannel: req.body.subscriberToChannel
  });

  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch(err) {
    res.status(400).json({ message: err.message });
  }
});


// Updating one
router.patch('/:id', getSubscribers, async (req, res) => {
  if (req.body.name != null) {
    res.subscriber.name = req.body.name;
  }

  if(req.body.subscriberToChannel != null) {
    res.subscriber.subscriberToChannel = req.body.subscriberToChannel;
  }

  try {
    const updatedSubscriber = await res.subscriber.save();
    res.json(updatedSubscriber);
  } catch(err) {
    res.status(400).json({ message: err.message });
  }
});


// Deleting One
router.delete('/:id', getSubscribers, async (req, res) => {
  try {
    await res.subscriber.remove();
    res.json({ message: 'Deleted Subscriber' });
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

// middleware
async function getSubscribers(req, res, next) {
  let subscriber;
  try {
    subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
      return res.status(404).json({ message: 'Cannot find subscriber' });
    }
  } catch(err) {
    res.status(500).json({ message: err.message });
  }

  res.subscriber = subscriber;
  next();
};

module.exports = router;