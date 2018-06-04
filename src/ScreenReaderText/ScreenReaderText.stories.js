import React from 'react';
import { storiesOf } from '@storybook/react';
import ScreenReaderText from './ScreenReaderText';
import { Button } from '../Button';
import { Paragraph } from '../Paragraph';

storiesOf('ScreenReaderText', module).add('standard', () => (
  <Paragraph>
    <Button dashicon="trash">
      <ScreenReaderText>Trash</ScreenReaderText>
    </Button>{' '}
    The button has a label of {'"trash"'} read by screen readers but it is
    hidden
  </Paragraph>
));
