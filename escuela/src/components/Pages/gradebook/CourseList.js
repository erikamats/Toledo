import React from 'react'

export default (props) => {
  const { courses } = props;
  return (
    <div>
      <ul>
        {courses && courses.map(course => (
          <li key={course.courseName}>
            <h5>{course.courseName}</h5>
            <p>ID: {course._id}</p>
            <p>Subject: {course.subject}</p>
            <p>Start Date: {course.startDate.toDateString()}</p>
            <p>End Date: {course.endDate.toDateString()}</p>
            <p>Class Days:{course.classDays}</p>
            <p>Start Time: {course.classStartTime}</p>
            <p>End Time: {course.classEndTime}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
