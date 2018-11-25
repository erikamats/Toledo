import React, { Component } from 'react';
import sampleStudents from './data/sampleStudents';
import sampleCourses from './data/sampleCourses';

export default class componentName extends Component {
  constructor(props) {
    super(props)

    this.state = {
      courses: {},
    }
  }
  loadAllCourses = () => {
    this.setState({ courses: sampleCourses })
  }

  render() {
    return (
      <div>
        <p>{this.state.courses.toString()}</p>
        <button onClick={this.loadAllCourses} />
      </div>
    )
  }
}
