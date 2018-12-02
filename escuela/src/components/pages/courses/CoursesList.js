import React from 'react';
import CourseContainer from './CourseContainer';


export default function CoursesList({ courses, deleteCourse }){
    
    const emptyMessage = (
        <p>There are no courses available</p>
    )

    const coursesList = (
        <div>
            {courses.map(course => <CourseContainer course ={course} key={course._id} deleteCourse={deleteCourse} />)}
        </div>
    )

    return(
        <div>
            { courses.length === 0 ? emptyMessage : coursesList}
        </div>
    )
}

