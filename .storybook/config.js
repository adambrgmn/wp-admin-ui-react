import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    background: #f1f1f1;
    color: #444;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    font-size: 13px;
    line-height: 1.4em;
    min-width: 600px;
    -webkit-font-smoothing: subpixel-antialiased;
  }
`;

const Wrapper = styled.div`
  padding: 20px;
`;

addDecorator(story => <Wrapper>{story()}</Wrapper>);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
