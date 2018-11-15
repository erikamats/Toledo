const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
    firstName:String,
    lastName:String,
    telephone:Number
});

const Student = mongoose.model("Student", studentSchema);

// var StudentEntry = new Student({
//     firstName: "Luis",
//     lastName:"Medina",
//     telephone:5555555
// })

// StudentEntry.save((error)=>{
//  console.log(`${StudentEntry.firstName} was saved to the data base`);

//  if(error){
//      console.log(error)
//  }
// })