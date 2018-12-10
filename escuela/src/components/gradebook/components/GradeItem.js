import React from "react";
import HeaderItem from "./HeaderItem";
import CellItem from "./CellItem";

const GradeItem = ({ students }) => {
  return (
    //eventually will map through length of assignments

    // each grade is related to a student per assignment

    <tr>
      <HeaderItem scope="row" headerItemName={students} />
      <CellItem />
      <CellItem />
      <CellItem />
    </tr>

    //close return
  );
  //close const
};

export default GradeItem;
