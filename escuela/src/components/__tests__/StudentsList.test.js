import React from 'react';
import ReactDOM from 'react-dom';
import StudentsList from 'components/gradebook/components/StudentsList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StudentsList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
