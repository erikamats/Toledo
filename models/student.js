const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
    firstName:String,
    lastName:String,
    telephone:Number
});

const Student = mongoose.model("Student", studentSchema);
