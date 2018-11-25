import React, { Component } from "react";
import AddClassForm from './AddClassForm';
import { connect } from 'react-redux';
import { addCourse } from '../../../actions';

class AddClassPage extends Component {

  render() {
    const { addCourse } = this.props
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <AddClassForm addCourse={addCourse} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { addCourse: state.addCourse }
}

export default connect(mapStateToProps, { addCourse })(AddClassPage)