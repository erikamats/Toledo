import React, { Component } from 'react'
// import GradeTable from "./components/GradeTable";
import GradebookButtonsList from "./components/GradebookButtonsList";
// import StudentsList from "./components/StudentsList";
// import CourseList from "./components/CourseList";


export default class Gradebook extends Component {
  componentWillMount = () => {
    const { getAssignments, getStudents, getGradebooks, getCourses } = this.props;
    getGradebooks();
    getAssignments();
    getStudents();
    getCourses();
  }

  render() {
    const { gradebooks, students, assignments, selectGradebookForEditing } = this.props
    return (
      <div>
        <h2>Your Gradebooks</h2>
        <GradebookButtonsList selectGradebookForEditing={selectGradebookForEditing} gradebooks={gradebooks} />
      </div>
    )
  }
}