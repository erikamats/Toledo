import React from "react";
import { Col } from "reactstrap";
import FooterListItem from "./FooterListItem";

export const FooterWidget = ({ href, listText, footerTitle }) => {
  return (
    <Col>
      <div className="footer-widget d-block text-warning ">
        <div className="footer-title">{footerTitle}</div>
        <ul className="list-unstyled">


          {/* <FooterListItem href={href} listText={listText} /> */}


        </ul>
      </div>
    </Col>
  );
};
export default FooterWidget;
