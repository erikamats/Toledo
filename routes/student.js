const mongoose = require('mongoose');
require('../models/student');
const Validator = require('validator');
const isEmpty = require('lodash/isEmpty')

const Student = mongoose.model('Student');


module.exports = app => {
    app.post('/register-student',(req, res) => {

        function validateInput(data){

            let errors = {}
        
            if(Validator.isEmpty(data.firstName)){
                errors.firstName = 'You must provide your first name'
            }
            if(Validator.isEmpty(data.lastName)){
                errors.lastName = 'You must provide your last name'
            }
            if(Validator.isEmpty(data.telephone)){
                errors.telephone = 'You must provide your telephone'
            }
            
            return {
                errors, 
                isValid: isEmpty(errors)
            }
        }

        const { errors, isValid } = validateInput(req.body);

        if(!isValid){
            res.status(400).json(errors)
        }
        
        var newStudent = new Student({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            telephone:req.body.telephone
        })

        newStudent.save(function (err, doc) {
            if (err)
            res.json('Whoops! I\'m sorry, an error happened while sending your message. Please send a message directly to <a href="mailto:medina.techie@gmail.com">medina.techie@gmail.com');
            else
                res.send(`Thanks for reaching out ${req.body.firstName}!`);
                console.log(`${newStudent.firstName} was saved to the data base`);

        });

        console.log(req.body.firstName)
        console.log(req.body.lastName)
        console.log(req.body.telephone)
        

    });

    const student = {
        name:"",
        fullName: ()=>{
            this.name + lastName
        }
    }

    app.get('/students', (req, res) =>{ 
        Student.find({}, function(err, data){
            console.log(">>>> " + data );
            res.send(data)
        });
    })
   
}