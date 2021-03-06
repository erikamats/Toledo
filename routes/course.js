const mongoose = require('mongoose');
require('../models/course');
const isEmpty = require('lodash/isEmpty');

const Course = mongoose.model('Course');


module.exports = app => {
  
	app.post('/course', (req, res) => {
		function validateInput(data) {
			let errors = {};

			return {
				errors,
				isValid: isEmpty(errors),
			};
		}

		const { errors, isValid } = validateInput(req.body);

		if (!isValid) {
			res.status(400).json(errors);
			console.log('Here are the errors' + errors);
		} else {
			var courseData = new Course({
				name: req.body.name,
				subject: req.body.subject,
				startDate: req.body.startDate,
                endDate: req.body.endDate,
                capacity: req.body.capacity
			});

			courseData.save(function(err, doc) {
				if (err)
					res.json(
						'Something went wrong with the database'
					);
				else res.send(`Data is good to go!`);
				console.log(`${courseData.name} was saved to the data base`);
			});
		}
		console.log(req.body.name);
		console.log(req.body.subject);
		console.log(req.body.startDate);
		console.log(req.body.endDate);
		console.log(req.body.capacity);
	});

	app.get('/course', (req, res) => {
		Course.find({}, function(err, data) {
			console.log('>>>> ' + data);
			res.send(data);
		});
	});
};
