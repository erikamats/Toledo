import React from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const AssignmentForm = ({
  onSubmit,
  formClassname,
  formHeading,
  label,
  onChange,
  type,
  name
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <h3>{formHeading}</h3>
      <TextFieldGroup
        onChange={console.log("Lesson Plan")}
        label="Lesson Plan Name"
        type="text"
        name="LessonPlan"
      />
      <TextFieldGroup
        onChange={console.log("Assignment Name")}
        label="Assingment Name"
        type="text"
        name="AssignmentName"
      />
      <TextFieldGroup
        onChange={console.log("hi")}
        label="Instructions"
        type="text"
        name="Instructions"
      />
      <FormGroup>
        <Label for="Assignment Type"> Assignment Type</Label>
        <Input type="select" name="select" multiple>
          <option>In Class Assignment </option>
          <option>Homework </option>
          <option>Participation </option>
          <option>Quiz</option>
          <option>Project</option>
          <option>Exam</option>
          <option>Make Up Activity</option>
        </Input>
      </FormGroup>
      <TextFieldGroup label="Due Date" type="date" name="dueDate" />
      <TextFieldGroup label="Due Time" type="time" name="dueTime" />

      <div className="custom-file">
        <input type="file" className="custom-file-input" id="customFile" />
        <label className="custom-file-label" for="customFile">
          Choose file - funct. needed
        </label>
      </div>

      <Button className="btn-warning"> Create Assignment</Button>
    </Form>
  );

  // close const
};

export default AssignmentForm;
