import React from 'react';
import ReactDOM from 'react-dom';
import UnderConstruction from "./UnderConstruction";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UnderConstruction />, div);
  ReactDOM.unmountComponentAtNode(div);
});
