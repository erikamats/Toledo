import React, { Component } from "react";
import CourseForm from './CourseForm';
import { connect } from 'react-redux';
import { addCourse } from '../../../actions';

class AddCoursePage extends Component {

  render() {
    const { addCourse } = this.props
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <CourseForm addCourse={addCourse} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { addCourse: state.addCourse }
}

export default connect(mapStateToProps, { addCourse })(AddCoursePage)