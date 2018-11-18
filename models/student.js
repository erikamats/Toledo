const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
    fullName:String,
    email:String,
    username:String,
    password:String,
    passwordConfirmation: String

});

const Student = mongoose.model("Student", studentSchema);
