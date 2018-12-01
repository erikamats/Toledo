import React from 'react';
import HeaderItem from "./headerItem";
import CellItem from "./cellItem"

const GradeItem =({studentName}) => {
    return(
      
        <tr>
        <HeaderItem scope="row" headerItemName={studentName}
        />
        <CellItem/>
        <CellItem/>
        <CellItem/>
        
        </tr>
   
      //close return
    );
  //close const
}

export default GradeItem;