import React from 'react';

import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      {
        name: 'id labore ex et quam laborum',
      },
      {
        name: 'quo vero reiciendis velit similique earum',
      },
      {
        name: 'odio adipisci rerum aut animi',
      },
      {
        name: 'alias odio sit',
      },
      {
        name: 'vero eaque aliquid doloribus et culpa',
      },
    ],
  });
});

it('can fetch a list of comments and display them', (done) => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  wrapped.find('.fetch-comments').simulate('click');

  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(5);
    done();
    wrapped.unmount();
  }, 100);
});

afterEach(() => {
  moxios.uninstall();
});
