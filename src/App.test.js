import React from 'react';
import ReactDOM from 'react-dom';
import Questions from './Components/Questions';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Questions />, div);
  ReactDOM.unmountComponentAtNode(div);
});
