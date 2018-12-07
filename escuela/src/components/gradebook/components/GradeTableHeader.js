import React from 'react';
import HeaderItem from "./HeaderItem";

const GradeTableHeader =() => {
    return(
        <thead>
        <tr>
          <th></th>
        <HeaderItem headerItemName="Hmwk 1"/>
        <HeaderItem headerItemName="Hmwk 2"/>
        <HeaderItem headerItemName="Exam 1"/>
        </tr>
      </thead>
      //close return
    );
  //close const
}

export default GradeTableHeader;