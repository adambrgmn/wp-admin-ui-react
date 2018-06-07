import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import ScreenReaderText from './ScreenReaderText';
import { Button } from '../Button';
import { Paragraph } from '../Paragraph';
import readme from './README.md';

storiesOf('ScreenReaderText', module)
  .addDecorator(withReadme(readme))
  .add('standard', () => (
    <Paragraph>
      <Button dashicon="trash">
        <ScreenReaderText>Trash</ScreenReaderText>
      </Button>{' '}
      The button has a label of {'"trash"'} read by screen readers but it is
      hidden
    </Paragraph>
  ));
