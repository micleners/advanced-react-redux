import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

it('has a text area and two buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

it('has a text area that a user can type in', () => {
  // find the textarea
  // simulate a 'change' event
  // provide a fake event object
  // force the component to update
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' },
  });
  wrapped.update();

  // assert that the textareas value has changed
  expect(wrapped.find('textarea').prop('value')).toBe('new comment');
});

it('should empty text area when form is submitted', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' },
  });
  wrapped.update();

  // assert that the textareas value has changed
  expect(wrapped.find('textarea').prop('value')).toBe('new comment');
  const preventDefault = jest.fn();
  wrapped.find('form').simulate('submit', {
    target: { value: 'new comment' },
    preventDefault,
  });
  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toBe('');
});

it('should call preventDefault on event when form is submitted', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' },
  });
  wrapped.update();

  // assert that the textareas value has changed
  expect(wrapped.find('textarea').prop('value')).toBe('new comment');
  const preventDefault = jest.fn();
  wrapped.find('form').simulate('submit', {
    target: { value: 'new comment' },
    preventDefault,
  });
  wrapped.update();

  expect(preventDefault).toHaveBeenCalled();
});

afterEach(() => {
  wrapped.unmount();
});