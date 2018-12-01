import React, { Component } from "react";
import { Table } from "reactstrap";
import GradeTableHeader from "./GradeTableHeader";
import GradeItem from "./GradeItem";

export default class GradeTable extends Component {
  render() {
    return (
      <Table hover>
        <GradeTableHeader />
        {/* eventually map through length of students. One student per row" */}
        <tbody>
          <GradeItem studentName="Erika" />
          <GradeItem studentName="Bob" />
          <GradeItem studentName="John" />
          <GradeItem studentName="Fernando" />
        </tbody>
      </Table>
      //close return
    );
    //close render
  }
  //close component
}
