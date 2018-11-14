const mongoose = require('mongoose');
const data = require('../models/student');
const { check,validationResult } = require('express-validator/check');
// const { sanitizeBody } = require('express-validator/filter');

const Student = mongoose.model('Student');


module.exports = app => {
    app.post('/register-student', [
        // check('firstName').isLength({ min: 1 }).trim().withMessage('First Name empty.'),
        // check('lastName').isLength({ min: 1 }).trim().withMessage('Last name is empty.'),
        // check('telephone').isLength({min: 1}).trim().toInt('Provide a phone number'),

        
    ] ,(req, res) => {
        const errors = validationResult(req);
       
        if(!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        
        new Student({
            firstName:String,
            lastName:String,
            telephone:Number
        })
        .save(function (err, doc) {
            if (err)
            res.json('Whoops! I\'m sorry, an error happened while sending your message. Please send a message directly to <a href="mailto:medina.techie@gmail.com">medina.techie@gmail.com');
            else
                res.send(`Thanks for reaching out ${req.body.firstName}!`);
        });
        

    });

    app.get('/students', (req, res) =>{ 
        Student.find({}, function(err, data){
            console.log(">>>> " + data );
            res.send(data)
        });
    })
   
}