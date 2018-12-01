import React, { Component } from "react";

import CourseList from "./components/CourseList";
import StudentsList from "./components/StudentsList";
import GradebookList from "./components/GradebookList";
import { sampleStudents } from "../../../data/sampleStudents";
import { sampleCourses } from "../../../data/sampleCourses";
import { sampleGradebooks } from "../../../data/sampleGradebooks";
import { sampleAssignments } from "../../../data/sampleAssignments";

export default class componentName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allCourses: [],
      allStudents: [],
      allGradebooks: {},
      allAssignments: {}
      //close State
    };
    //close constructor
  }
  componentDidMount = () => {
    this.setState({
      allCourses: sampleCourses,
      allStudents: sampleStudents,
      allGradebooks: sampleGradebooks,
      allAssignments: sampleAssignments,
    });
// close componentDidMount
  }

  viewCourses = () => {};
  viewStudents = () => {
    this.setState({ allCourses: [], students: sampleStudents });
  };
  onSubmit(e) {
    e.preventDefault();
    console.log("This Will Submit");
  }
  render() {
    return (
      <div>
        <div>
          <GradebookList
            gradebooks={this.state.gradebooks}
            assignments={sampleAssignments}
          />
          <button onClick={this.viewCourses}>View All Courses</button>
          <button onClick={this.viewStudents}>View All Students</button>
          <StudentsList students={this.state.students} />
          <CourseList courses={this.state.courses} />
        </div>
   
      </div>
    );
  }
}
