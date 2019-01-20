import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import "../LandingPage.css";


const TopHeader = (props) => {
    return (
      <div>
        <Jumbotron fluid className="top-header">
          <Container fluid className="top-header-container">
            <h1 className="display-3">Latest Events</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </Container>
        </Jumbotron>
      </div>
    );
  };

export default TopHeader;
