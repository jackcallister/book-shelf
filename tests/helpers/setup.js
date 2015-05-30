'use strict';

import jsdom from 'jsdom';

global.document = jsdom.jsdom('<html><body></body></html>');
global.window = document.defaultView;

global.navigator = {
  userAgent: 'node.js'
};
