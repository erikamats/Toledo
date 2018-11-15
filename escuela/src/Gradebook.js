import React, { Component } from "react";
import { studentList } from "./SampleStudent";

class Gradebook extends Component {
  constructor() {
    super();
    this.state = {
      studentList
    };
    console.log(studentList);
  }

  avgGrade() {}

  render() {
    return (
      <div>
        This will be the Gradebook.
        <h1> Fernando's Class</h1>
        <hr />
        {this.state.studentList.map(kids => (
          <ul style={{ listStyleType: "none" }}>
            <li> {kids.studentName}</li>
            <li> {kids.hmwk1}</li>
            <li> {kids.hmwk2}</li>
            <hr />
            </ul>
        ))}
      </div>
    );
  }
}

export default Gradebook;
