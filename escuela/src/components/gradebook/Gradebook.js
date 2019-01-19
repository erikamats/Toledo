import React, { Component } from 'react'
// import GradeTable from "./components/GradeTable";
import GradebookButtonsList from "./components/GradebookButtonsList";
import OpenGradebook from "./components/OpenGradebook";
// import StudentsList from "./components/StudentsList";
// import CourseList from "./components/CourseList";


export default class Gradebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditingGradebook: false
    };
    this.toggleViewEditGradebook.bind(this);
  }
  componentWillMount = () => {
    const { getAssignments, getStudents, getGradebooks, getCourses } = this.props;
    getGradebooks();
    getAssignments();
    getStudents();
    getCourses();
  }
  toggleViewEditGradebook = () => {
    this.setState({
      isEditingGradebook: !this.state.isEditingGradebook
    })
  }

  render() {
    const { gradebooks, students, assignments, selectGradebookForEditing, currentlyEditingGradebook } = this.props
    if (this.state.isEditingGradebook) { return <OpenGradebook gradebook={currentlyEditingGradebook} toggleViewEditGradebook={this.toggleViewEditGradebook} /> }
    return (
      <div>

        <h2>Your Gradebooks</h2>
        <GradebookButtonsList toggleViewEditGradebook={this.toggleViewEditGradebook} selectGradebookForEditing={selectGradebookForEditing} gradebooks={gradebooks} />
      </div>
    )
  }
}