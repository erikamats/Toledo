import React from 'react';
import ReactDOM from 'react-dom';
import Gradebook from '../gradebook/Gradebook';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Gradebook />, div);
  ReactDOM.unmountComponentAtNode(div);
});
