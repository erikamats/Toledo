import React from "react";
import { Table } from "reactstrap";
import GradeTableHeader from "./GradeTableHeader";
import GradeItem from "./GradeItem";


const GradeTable = (props) => {

  //   render(props) {
  const { students } = props;
  return (
    <Table hover>
      <GradeTableHeader />

      <tbody>
        {students && Object.keys(students).map((studentsKey) => {
          if (studentsKey === 'isLoading' || studentsKey === 'error') { return null }
          const student = students[studentsKey]
          return (
            <GradeItem key={student.id} students={student.firstName} />
          )
        })}
        {/* <GradeItem studentName="Erika" />
          <GradeItem studentName="Bob" />
          <GradeItem studentName="John" />
          <GradeItem studentName="Fernando" /> */}
      </tbody>
    </Table>
    //close return
  );
  //close render
  //   }
  //close component
}
export default GradeTable;