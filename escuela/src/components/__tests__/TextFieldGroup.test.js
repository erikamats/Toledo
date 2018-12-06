import React from 'react';
import ReactDOM from 'react-dom';
import TextFieldGroup from '../common/TextFieldGroup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextFieldGroup />, div);
  ReactDOM.unmountComponentAtNode(div);
});
