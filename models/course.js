const mongoose = require('mongoose');
const { Schema } = mongoose;
const uniqueValidator = require('mongoose-unique-validator');

const courseSchema = new Schema(
	{
		name: {
			type: String,
			// lowercase: true,
			// required: [true, 'A course name is required'],
			// match: [/^[a-zA-Z0-9]+$/, 'Name is invalid'],
			index: true,
		},
		subject: {
			type: String,
			// lowercase: true,
			required: [true, 'A subject is required'],
		},
		startDate: {
			type: Date,
			// required: [true, 'A start date is required'],
		},
		endDate: {
			type: Date,
			// required: [true, 'A start date is required'],
		},
		capacity: {
			type: Number,
			required: false,
		},
	},
	{ timestamps: true }
);

courseSchema.plugin(uniqueValidator, { message: 'is already taken' });

mongoose.model('Course', courseSchema);



// var MiddleSchool = new Course({
//     name: "EightGrade",
//     subject:"Math",
//     startDate:05-23-18,
// 	endDate:05-32-86,
// 	capacity: 25
// })

// MiddleSchool.save((error)=>{
//  console.log(`${MiddleSchool.name} was saved to the data base`);

//  if(error){
//      console.log(error)
//  }
// })