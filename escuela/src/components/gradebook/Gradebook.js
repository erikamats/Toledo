import React from "react";
import GradeTable from "./components/GradeTable";
import GradebookList from "./components/GradebookList";
import StudentsList from "./components/StudentsList";
// import CourseList from "./components/CourseList";

import { student1 } from 'data/sampleStudents'
import { gradebook1 } from 'data/sampleGradebooks'
import { assignment1 } from 'data/sampleAssignments'
import { course1 } from 'data/sampleCourses'
import AssignmentList from '../assignments/components/AssignmentList'
import CourseList from "./components/CourseList";

export default (props) => {

  const { gradebooks, students, assignments, onGetAssignments, onGetStudents, onSaveStudent, onGetGradebooks, onSaveGradebook, onSaveAssignment , courses} = props

  return (
    <div>
      <div>
        <GradeTable students={students} />
        <hr />
        {/* <GradebookList
          gradebooks={gradebooks}
          assignments={assignments}
        /> */}
        <button onClick={() => onGetAssignments()}>
          Get assignments
        </button>
        <button onClick={() => onGetGradebooks()}>
          Get gradebooks
        </button>
        <button onClick={() => onGetStudents()}>
          Get students
        </button>
        <CourseList courses={courses}/>
        <AssignmentList assignments={assignments}/>
        <StudentsList students={students} />
        {/* <CourseList courses={this.state.allCourses} /> */}
      </div>
    </div>
  )
}