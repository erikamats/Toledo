import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  fetchCourses, deleteCourse } from '../../../actions';
import CoursesList from './CoursesList';

class Courses extends Component {

    componentDidMount(){
        this.props.fetchCourses();
    }

    
    render() {
        return (
            <div>
                <h1>School Courses</h1>
                <CoursesList courses = {this.props.courses} deleteCourse={this.props.deleteCourse} />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps, {fetchCourses, deleteCourse})(Courses);