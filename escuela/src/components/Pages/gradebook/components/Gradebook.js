import React, { Component } from 'react';

import CourseList from './CourseList'
import StudentsList from './StudentsList'

import { sampleStudents } from '../data/sampleStudents';
import { sampleCourses } from '../data/sampleCourses';

export default class componentName extends Component {
  constructor(props) {
    super(props)

    this.state = {
      courses: [],
      students: []
    }
  }
  viewCourses = () => {
    this.setState({ courses: sampleCourses, students: [] })
  }
  viewStudents = () => {
    this.setState({ courses: [], students: sampleStudents })
  }

  render() {
    return (
      <div>
        <button onClick={this.viewCourses}>View All Courses</button>
        <button onClick={this.viewStudents}>View All Students</button>
        <StudentsList students={this.state.students}></StudentsList>
        <CourseList courses={this.state.courses}></CourseList>
      </div>
    )
  }
}
