const mongoose = require('mongoose');
const { Schema } = mongoose;
const uniqueValidator = require('mongoose-unique-validator');

const studentSchema = new Schema(
	{
		fullName: {
			type: String,
			lowercase: true,
			required: [true, 'A full name is required'],
			match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
			index: true,
		},
		email: {
			type: String,
			unique: true,
			lowercase: true,
			required: [true, 'An email is required'],
			match: [/\S+@\S+\.\S+/, 'is invalid'],
			index: true,
		},
		username: {
			type: String,
			unique: true,
			required: [true, 'A username is required'],
			match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
			index: true,
		},
		password: String,
		passwordConfirmation: String,
	},
	{ timestamps: true }
);

studentSchema.plugin(uniqueValidator, { message: 'is already taken' });

mongoose.model('Student', studentSchema);
