import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('has comment box component', () => {
  expect(wrapped.find(CommentBox)).toHaveLength(1);
});

it('has comment list component', () => {
  expect(wrapped.find(CommentList)).toHaveLength(1);
});
