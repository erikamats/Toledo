import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  addCourse, deleteCourse } from '../../../actions';
import { Button } from 'reactstrap';

class ClassList extends Component {
    componentDidMount(){
        this.props.addCourse();
    }

    deleteButtonClick(){
        this.props.deleteCourse(this.props.course._id)
    }

    // renderClasses(){
    //     return this.props.classes && this.props.classes.map(student=>{
    //         return <li delete={this.props.delete} key={student._id}>{student.firstName}</li>
    //     })
    // }

    render(){

        return this.props.course && this.props.course.map(course =>{
            return (
                <div>  
                    <li key={course._id}>{course.name} {course.subject}</li>
                    <Button onClick={this.deleteButtonClick.bind(this)}>DELETE</Button>
                </div>
                )
        })
    }
}


// function mapDispatchToProps(dispatch) {
//     return {
//         delete: student => dispatch({ type: 'DELETE_STUDENT', payload: student})
//     }
// } 

function mapStateToProps(state) {
    return { course: state.courses}
}

export default connect(mapStateToProps, {addCourse, deleteCourse})    (ClassList)