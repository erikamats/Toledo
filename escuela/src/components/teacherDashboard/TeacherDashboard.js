import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./TeacherDashboard.css";
import DashNav from "./components/dashNav";
import DashLanding from "./components/dashLanding";
import Attendance from "./Attendance";
import GradebookContainer from "../gradebook/GradebookContainer";
import Assignment from "../assignments/Assignment";



export default class TeacherDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: " "
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(compName, e) {
    console.log(compName);
    this.setState({ render: compName });
  }

  renderSubComp() {
    switch (this.state.render) {
      case 'attendance':
        return <Attendance />;
      case "gradebook":
        return <GradebookContainer />;
      case "assignment":
        return <Assignment />;
        case "dashboard":
        return <DashLanding />;
      default:
        return <DashLanding />;
    }
  }

  componentDidMount() {
    window.scrollTo(0, 145);
    // $("#calendar").fullCalendar({
    //   defaultView: "month",
    //   header: { center: "month,agendaWeek" }, // buttons for switching between views

    //   views: {
    //     month: {
    //       // name of view
    //       titleFormat: "YYYY, MM, DD"
    //       // other view-specific options here
    //     }
    //   }
    // });
  }

  render() {
    return (
      <Router>
        <div className="dashGridContainer">

          <DashNav render={this.state.render} handleClick={this.handleClick} />
          {this.renderSubComp()}
        </div>
        
      </Router>
    );
  }
}
