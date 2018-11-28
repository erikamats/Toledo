import React, { Component } from "react";
import TextFieldGroup from "../../../components/common/TextFieldGroup";
// import Validator from "validator";
// import isEmpty from "lodash/isEmpty";
import TypeButton from "../../common/typeButton";

// function validateInput(data) {
//   let errors = {};

//   if (Validator.isEmpty(data.image)) {
//     errors.image = "Please inlude and image link/url!";
//   }

//   if (Validator.isEmpty(data.caption)) {
//     errors.caption = "You must provide a caption for your slider";
//   }

//   if (Validator.isEmpty(data.buttonText)) {
//     errors.buttonText = "You must provide text to include inside your button!";
//   }
//   if (Validator.isEmpty(data.buttonType)) {
//     errors.buttonType = "Include a button type i.e.(button, submit, reset)";
//   }
//   if (Validator.isEmpty(data.hfref)) {
//     errors.href = "Include a Route for your link!";
//   }
//   return {
//     errors,
//     isValid: isEmpty(errors),
//   };
// }

class SliderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      caption: " ",
      captionP: " ",
      buttonText: "",
      buttonHref: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //   isValid() {
  //     const { errors, isValid } = validateInput(this.state);

  //     if (!isValid) {
  //       this.setState({ errors });
  //     }

  //     return isValid;
  //   }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name);
    console.log(e.target.value);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    // const { errors } = this.state;
    return (
      <div className="row justify-content-center text-center">
        <form onSubmit={this.onSubmit} className="col-5 align-self-center">
          <h2> Add a new Slider</h2>
          <h4 className="text-danger font-italic">
            {" "}
            This will only appear with Permissions.
          </h4>
          <TextFieldGroup
            label="Image Link"
            onChange={this.onChange}
            value={this.state.image}
            field="img"
          />
             <TextFieldGroup
            label="Slider Caption Title"
            onChange={this.onChange}
            value={this.state.caption}
            field="caption"
          />
          <TextFieldGroup
            label="Slider Caption Pargraph"
            onChange={this.onChange}
            value={this.state.captionP}
            field="captionP"
          />
          <TextFieldGroup
            label="Text for Button"
            onChange={this.onChange}
            value={this.state.buttonText}
            field="buttonText"
          />
          <TextFieldGroup
            label="Link/URL for Button"
            onChange={this.onChange}
            value={this.state.buttonHref}
            field="buttonHref"
          />

          <TypeButton type="submit" onClick={this.onSubmit} text="Add Slider" />
        </form>
      </div>
    );
  }
}

export default SliderForm;
