import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Postbox from './Postbox';
import PostboxContent from './PostboxContent';
import PostboxFooter from './PostboxFooter';

import { Paragraph } from '../Paragraph';
import { Button } from '../Button';
import { WithState } from '../utils';

const Wrapper = styled.div`
  width: 250px;
`;

storiesOf('Postbox', module).add('standard', () => (
  <Wrapper>
    <WithState initialState={{ closed: false }}>
      {({ state, setState }) => (
        <Postbox
          title="Title"
          closed={state.closed}
          onToggle={() => setState({ closed: !state.closed })}
        >
          <PostboxContent>
            <Paragraph>
              Here is a postbox that you can use to display som nice looking
              stuff.
            </Paragraph>
          </PostboxContent>

          <PostboxFooter>
            <Button modifiers={['link', 'link-delete']}>Remove</Button>
            <Button modifiers={['primary']}>Publish</Button>
          </PostboxFooter>
        </Postbox>
      )}
    </WithState>
  </Wrapper>
));
