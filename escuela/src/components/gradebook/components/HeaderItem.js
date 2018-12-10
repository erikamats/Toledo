import React from "react";

const HeaderItem = ({ headerItemName, scope }) => {
  return (
    <th scope={scope}>
      {headerItemName}
    </th>

    //close return
  );
  //close const
};

export default HeaderItem;
