const mongoose = require('mongoose');
require('../models/student');
const commonValidations = require('../shared/validations/signup');
const bcrypt = require('bcrypt');
const isEmpty = require('lodash/isEmpty');

const Student = mongoose.model('Student');


function validateInput(data, otherValidations){
    let { errors } = otherValidations(data);

    return Student.find({
        $or: [ {username: data.username}, {email: data.email} ] }) 
            .then(user => { 
                if (user.length) { 
                    if (user[0].username === data.username) { 
                        errors.username = 'Sorry, username has been taken'; 
                    }if (user[0].email === data.email) { 
                        errors.email = 'Email is already registered'; } 
                    } 
                    return { errors, isValid: isEmpty(errors) } 
                }); 
} 

module.exports = app => {
    app.post('/register-student',(req, res) => {
        validateInput(req.body, commonValidations.validateInput)
            .then(({ errors, isValid }) =>{
                if(isValid){
                    const { fullName, email, username, password } = req.body;
                    const password_digest = bcrypt.hashSync(password,10)
                    var newStudent = new Student({
                        fullName: fullName,
                        email: email,
                        username: username,
                        password:password_digest,
                    })
        
                    newStudent.save()
                    .then(student => res.json({success: true}))
                    .catch(err => res.status(500).json({error: err}))
                }else{
                    res.status(400).json(errors)
                }
            })
    });

    app.get('/students', (req, res) =>{ 
        Student.find({}, function(err, data){
            console.log(">>>> " + data );
            res.send(data)
        });
    })
   
}