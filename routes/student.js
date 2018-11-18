const mongoose = require('mongoose');
require('../models/student');
const Validator = require('validator');
const isEmpty = require('lodash/isEmpty')

const Student = mongoose.model('Student');


module.exports = app => {
    app.post('/register-student',(req, res) => {

        function validateInput(data){

            let errors = {}
        
            if(Validator.isEmpty(data.fullName)){
                errors.fullName = 'You must provide your name'
            }
            if(Validator.isEmpty(data.email)){
                errors.email = 'You must provide your email'
            }
            if(!Validator.isEmail(data.email)){
                errors.email = 'You should provide a valid email'
            }
            if(Validator.isEmpty(data.username)){
                errors.username = 'You must provide your telephone'
            }
            if(Validator.isEmpty(data.passwordConfirmation)){
                errors.passwordConfirmation = 'You must provide a password'
            }
            
            if(!Validator.equals(data.password, data.passwordConfirmation)){
                errors.passwordConfirmation = 'Passwords did not match'
            }

            return {
                errors, 
                isValid: isEmpty(errors)
            }
        }

        const { errors, isValid } = validateInput(req.body);

        if(!isValid){
            res.status(400).json(errors)
            console.log("Here are the errors" + errors)
        }else{
        
            var newStudent = new Student({
                fullName:req.body.fullName,
                email:req.body.email,
                username:req.body.username,
                password:req.body.password,
                passwordConfirmation:req.body.passwordConfirmation
            })

            newStudent.save(function (err, doc) {
                if (err)
                res.json('Whoops! I\'m sorry, an error happened while sending your message. Please send a message directly to <a href="mailto:medina.techie@gmail.com">medina.techie@gmail.com');
                else
                    res.send(`Thanks for reaching out ${req.body.fullName}!`);
                    console.log(`${newStudent.fullName} was saved to the data base`);

            });
        }
        console.log(req.body.fullName)
        console.log(req.body.email)
        console.log(req.body.username)
        console.log(req.body.password)
        console.log(req.body.passwordConfirmation)
        

    });

    app.get('/students', (req, res) =>{ 
        Student.find({}, function(err, data){
            console.log(">>>> " + data );
            res.send(data)
        });
    })
   
}