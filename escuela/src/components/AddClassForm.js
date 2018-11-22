import React, { Component } from "react";
import TextFieldGroup from "./common/TextFieldGroup";
import ClassList from "./ClassList";
import Validator from 'validator';
import isEmpty from "lodash/isEmpty";

function validateInput(data){

    let errors = {}

    if(Validator.isEmpty(data.name)){
        errors.name = 'Please Include add a Course Name'
    }

    // if(!Validator.isEmpty(data.subject)){
    //     errors.subject = 'Add a Subject'
    // }
    // if(Validator.toDate(data.startDate)){
    //     errors.startDate = 'Start Date Required'
    // }
    // if(Validator.toDate(data.endDate)){
    //     errors.endDate = 'End Date Required'
    // }

    if(Validator.isEmpty(data.capacity)){
        errors.capacity = 'Room Capacity Required'
    }
    

    return {
        errors, 
        isValid: isEmpty(errors)
    }
}

class AddClassForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      subject: "",
      startDate: "",
      endDate: "",
      capacity: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  isValid() {
		const { errors, isValid } = validateInput(this.state);

		if (!isValid) {
			this.setState({ errors });
		}

		return isValid;
	}

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name);
    console.log(e.target.value);
  }

  onSubmit(e) {
		e.preventDefault();
		if (this.isValid()) {
			this.setState({ errors: {}, isLoading: true });
      this.props.addCourse(this.state)
		}
	}

  render() {
    return (
        <section>
            
    
      <form onSubmit={this.onSubmit} className="col-12">
        <h1> Add a New Class</h1>

        <TextFieldGroup
          label="Course Name"
          onChange={this.onChange}
          value={this.state.name}
          field="name"
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
