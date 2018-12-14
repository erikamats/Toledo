const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'An assignment name is required'],
  },
  description: {
    type: String,
    trim: true
  },
  associatedGradebookById: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gradebook',
  }
});

module.exports = mongoose.model('Assignment', assignmentSchema);
