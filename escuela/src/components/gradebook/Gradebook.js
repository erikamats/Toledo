import React, { Component } from 'react'
// import GradeTable from "./components/GradeTable";
import GradebookList from "./components/GradebookList";
// import StudentsList from "./components/StudentsList";
// import CourseList from "./components/CourseList";


export default class Gradebook extends Component {
  componentDidMount = () => {
    const { getAssignments, getStudents, getGradebooks } = this.props
    getGradebooks();
    getAssignments();
    getStudents();
  }

  render() {
    const { gradebooks, students, assignments } = this.props
    return (
      <div>
        <h2>Your Gradebooks</h2>
        <GradebookList gradebooks={gradebooks} />
      </div>
    )
  }
}