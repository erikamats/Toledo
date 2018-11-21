import React, { Component } from "react";
import TextFieldGroup from "./common/TextFieldGroup";
import ClassList from "./ClassList";
// import Validator from 'validator';
// import isEmpty from "lodash/isEmpty";

// function validateInput(data){

//     let errors = {}

//     if(Validator.isEmpty(data.courseName)){
//         errors.courseName = 'Please Include add a Course Name'
//     }

//     if(!Validator.isEmpty(data.subject)){
//         errors.subject = 'Add a Subject'
//     }
//     if(Validator.isEmpty(data.startDate)){
//         errors.startDate = 'Start Date Required'
//     }
//     if(Validator.isEmpty(data.endDate)){
//         errors.endDate = 'End Date Required'
//     }

//     if(Validator.isEmpty(data.capacity)){
//         errors.capacity = 'Room Capacity Required'
//     }
    
//     if(Validator.isEmpty(data.roomNumber)){
//         errors.roomNumber = 'Room Number is Needed'
//     }
    

//     return {
//         errors, 
//         isValid: isEmpty(errors)
//     }
// }

class AddClassForm extends Component {
  constructor() {
    super();
    this.state = {
    courseName: "",
      subject: "",
      startDate: "",
      endDate: "",
      capacity: "",
      roomNumber: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name);
    console.log(e.target.value);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  render() {
    return (
        <section>
            
    
      <form onSubmit={this.onSubmit} className="col-12">
        <h1> Add a New Class</h1>

        <TextFieldGroup
          label="Course Name"
          onChange={this.onChange}
          value={this.state.courseName}
          field="courseName"
        />
        <TextFieldGroup
          label="Class Subject"
          onChange={this.onChange}
          value={this.state.subject}
          field="subject"
        />
        <TextFieldGroup
          label="Start Date"
          onChange={this.onChange}
          value={this.state.startDate}
          field="startDate"
          type= "date"
        />

        <TextFieldGroup
          label="End Date"
          onChange={this.onChange}
          value={this.state.endDate}
          field="endDate"
          type= "date"

        />

        <TextFieldGroup
          label="Capacity"
          onChange={this.onChange}
          value={this.state.capacity}
          field="capacity"
          type= "number"
        />

          <TextFieldGroup
          label="Room Number"
          onChange={this.onChange}
          value={this.state.roomNumber}
          field="roomNumber"
          type= "number"
        />

          <div className="form-group">
                    <button className="btn btn-danger btn-lg">
                      Add New Class
                    </button>
                </div>
      </form>

        <ClassList/>


          </section>
    );
  }
}

export default AddClassForm;
