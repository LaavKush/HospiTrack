const mongoose = require('mongoose');

// Define the schema for complaints
const complaintSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,  // Complaint category is required
  },
  description: {
    type: String,
    required: true,  // Description is required
  },
  createdAt: {
    type: Date,
    default: Date.now,  // Timestamp when the complaint is created
  },
});

// Create the model from the schema
const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;
