'use strict';

require('./helpers/setup');

import React from 'react/addons';
import assert from 'assert';
import App from '../app/app';

const TestUtils = React.addons.TestUtils;

describe('App', () => {
  const AppElement = TestUtils.renderIntoDocument(<App />);
  const headingElement = TestUtils.findRenderedDOMComponentWithTag(AppElement, 'h1');

  it('renders Hello, World', () => {
    assert(React.findDOMNode(headingElement).textContent, 'Hello, World');
  });
});
