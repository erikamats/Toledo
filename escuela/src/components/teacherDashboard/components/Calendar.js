import React from "react";
import $ from "jquery";
import "fullcalendar";
import 'jquery-ui-dist/jquery-ui';
import 'fullcalendar/dist/fullcalendar.css';
// import 'fullcalendar/dist/fullcalendar.print.min.css';
import 'fullcalendar/dist/fullcalendar.js';

export default class Calendar extends React.Component {
 componentDidMount() {
    $("#calendar").fullCalendar({
      header: {
        left: "prev,next today",
        center: "title",
        right: "month,agendaWeek,agendaDay"
      },
      editable: true,
      droppable: true, // this allows things to be dropped onto the calendar
      drop: function() {
        // is the "remove after drop" checkbox checked?
        if ($("#drop-remove").is(":checked")) {
          // if so, remove the element from the "Draggable Events" list
          $(this).remove();
        }
      }
    });
  } 
  
    render() {
    return <div id="calendar" />;
  }
  
}

//end class Cal



export class External extends React.Component {
    componentDidMount() {
        $("#external-events .fc-event").each(function() {
          // store data so the calendar knows to render an event upon drop
          $(this).data("event", {
            title: $.trim($(this).text()), // use the element's text as the event title
            stick: true // maintain when user navigates (see docs on the renderEvent method)
          });
    
          // make the event draggable using jQuery UI
          $(this).draggable({
            zIndex: 999,
            revert: true, // will cause the event to go back to its
            revertDuration: 0 //  original position after the drag
          });
        });
      }
  render() {
    return (
      <div id="external-events">
        <h4>Draggable Events</h4>
        <div className="fc-event">Exam</div>
        <div className="fc-event">Quiz</div>
        <div className="fc-event">Homework</div>
        <div className="fc-event">My Event 4</div>
        <div className="fc-event">My Event 5</div>
        <p>
          <input type="checkbox" id="drop-remove" />
          <label for="drop-remove"> remove after drop</label>
        </p>
      </div>
    );
  }
}





