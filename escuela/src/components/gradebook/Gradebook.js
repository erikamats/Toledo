import React from "react";
import GradeTable from "./components/GradeTable";
import GradebookList from "./components/GradebookList";
import StudentsList from "./components/StudentsList";
// import CourseList from "./components/CourseList";

import { student1 } from 'data/sampleStudents'
import { gradebook1 } from 'data/sampleGradebooks'
import { assignment1 } from 'data/sampleAssignments'
import { course1 } from 'data/sampleCourses'

export default (props) => {

  const { gradebooks, students, assignments, onSaveStudent, onSaveGradebook, onSaveAssignment } = props

  return (
    <div>
      <div>
        <GradeTable students={students} />
        <hr />
        <GradebookList
          gradebooks={gradebooks}
          assignments={assignments}
        />
        <button onClick={() => onSaveStudent(student1)}>
          Save student1
        </button>
        <button onClick={() => onSaveGradebook(gradebook1)}>
          Save gradebook1
        </button>
        <button onClick={() => onSaveAssignment(assignment1)}>
          Save assignment1
        </button>
        <StudentsList students={students} />
        {/* <CourseList courses={this.state.allCourses} /> */}
      </div>
    </div>
  )
}