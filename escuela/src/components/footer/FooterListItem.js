import React from 'react';

export const FooterListItem = ({ href, listText }) => {
  return (
    <li>
      <a href={href}>{listText}</a>
    </li>
  );
}
export default FooterListItem;