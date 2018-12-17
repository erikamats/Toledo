import React from "react";
import { Table } from "reactstrap";
import GradeTableHeader from "./GradeTableHeader";
import GradeItem from "./GradeItem";

const GradeTable = props => {
  const { students } = props;
    return (
    <Table hover>
      <GradeTableHeader />

      <tbody>
        {students.students &&
          students.students.map(student => {
            const { id, firstName, lastName } = student;
            return <GradeItem key={id} students={firstName + " " + lastName} />;
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
};
export default GradeTable;
