import React from 'react';
import ReactDOM from 'react-dom';
import CourseList from './components/CourseList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CourseList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
