const mongoose = require('mongoose');
require('../models/student');
const validate = require('../shared/validations/signup');
const bcrypt = require('bcrypt');



const Student = mongoose.model('Student');


module.exports = app => {
    app.post('/register-student',(req, res) => {
        const { errors, isValid } = validate.validateInput(req.body);

        if(isValid){
            const { fullName, email, username, password } = req.body;
            const password_digest = bcrypt.hashSync(password,10)
            console.log("new user was created")
            var newStudent = new Student({
                fullName: req.body.fullName,
                email: email,
                username: username,
                password:password_digest,
            })

            newStudent.save(function (err, doc) {
                if (err)
                res.json('Whoops! I\'m sorry, an error happened while sending your message. Please send a message directly to <a href="mailto:medina.techie@gmail.com">medina.techie@gmail.com');
                else
                    res.send(`${fullName} was successfully saved to the DB!`);
                    console.log(`${fullName} was saved to the data base`);

            });
        }else{
            res.status(400).json(errors)
            console.log("Here are the errors" + errors)
        }
        

    });

    app.get('/students', (req, res) =>{ 
        Student.find({}, function(err, data){
            console.log(">>>> " + data );
            res.send(data)
        });
    })
   
}