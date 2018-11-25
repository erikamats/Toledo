import React, { Component } from "react";
import TextFieldGroup from "../../../components/common/TextFieldGroup";

class SliderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      caption: "",
      buttonText: "",
      buttonType: "",
      href: ""
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
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.postUser(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'Your registration was successful. Welcome to Toledo!',
          });
          this.props.history.push('/');
        },
        ({ data }) => this.setState({ errors: data.errors, isLoading: false })
      );
    }
  }
  
  render() {
    return <h2> Slider Form</h2>;
  }
}

export default SliderForm;
