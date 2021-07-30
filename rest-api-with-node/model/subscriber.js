const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subscriberToChannel: {
    type: String,
    required: true,
  },
  subscribeDate: {
    type: String,
    required: true,
    default: Date.now
  },
});

module.exports = mongoose.model('Subscriber', subscriberSchema);
// This model functions is allow us to connect directly with database.
