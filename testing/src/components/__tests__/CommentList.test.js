import React from 'react';
import ReactDOM from 'react-dom';
import CommentList from 'components/CommentList';

it('shows a comment box', () => {
  const div = document.createElement('div');

  ReactDOM.render(<CommentList />, div);

  ReactDOM.unmountComponentAtNode(div);
});
