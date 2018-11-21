const mongoose = require('mongoose');
const { Schema } = mongoose;
const uniqueValidator = require('mongoose-unique-validator');

const Course = new Schema(
	{
		name: {
			type: String,
			lowercase: true,
			required: [true, 'A course name is required'],
			match: [/^[a-zA-Z0-9]+$/, 'Name is invalid'],
			index: true,
		},
		subject: {
			type: String,
			lowercase: true,
			required: [true, 'A subject is required'],
		},
		startDate: {
			type: Date,
			required: [true, 'A start date is required'],
		},
		endDate: {
			type: Date,
			required: [true, 'A start date is required'],
		},
		capacity: {
			type: Number,
			required: false,
		},
	},
	{ timestamps: true }
);

studentSchema.plugin(uniqueValidator, { message: 'is already taken' });

mongoose.model('Course', Course);
