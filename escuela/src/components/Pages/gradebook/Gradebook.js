import React, { Component } from 'react';

import CourseList from './components/CourseList'
import StudentsList from './components/StudentsList'
import GradebookList from './components/GradebookList'

import { sampleStudents } from './data/sampleStudents';
import { sampleCourses } from './data/sampleCourses';
import { sampleGradebooks } from './data/sampleGradebooks'
import { sampleAssignments } from './data/sampleAssignments'

export default class componentName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allCourses: [],
      students: [],
      allGradebooks: {},
      allAssignments: {}
    }
  }

  viewCourses = () => {
    this.setState({ allCourses: sampleCourses, students: [] })
  }
  viewStudents = () => {
    this.setState({ allCourses: [], students: sampleStudents })
  }

  render() {
    return (
      <div>
        <GradebookList gradebooks={this.state.gradebooks} assignments={sampleAssignments} ></GradebookList>
        <button onClick={this.viewCourses}>View All Courses</button>
        <button onClick={this.viewStudents}>View All Students</button>
        <StudentsList students={this.state.students}></StudentsList>
        <CourseList courses={this.state.courses}></CourseList>
      </div>
    )
  }
}
