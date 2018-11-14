import React, { Component } from "react";
import { studentList } from "../SampleStudent";

class Gradebook extends Component {
  constructor() {
    super();
    this.state = {
      on: false,
      studentList
    };
    console.log(studentList);
  }

  render() {
    return (
      <div>
        This will be the Gradebook.
        <h1> Fernando's Class</h1>
        <hr />
       
          {this.state.studentList.map(kids => (
            <ul>
            <li> {kids.name}</li>
            <li> {kids.hmwk}</li>
            </ul>
          ))}
       
      </div>
    );
  }
}

export default Gradebook;
