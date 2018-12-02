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
        {students && students.map(student =>(
            <GradeItem students={student.firstName} />
        ))}
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