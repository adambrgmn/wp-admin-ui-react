import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import readme from './README.md';

storiesOf('Button', module)
  .addDecorator(withReadme(readme))
  .add('standard', () => <Button>Button</Button>)
  .add('secondary', () => <Button modifiers={['secondary']}>Button</Button>)
  .add('primary', () => <Button modifiers={['primary']}>Button</Button>)
  .add('large', () => <Button modifiers={['large']}>Button</Button>)
  .add('small', () => <Button modifiers={['small']}>Button</Button>)
  .add('hero', () => <Button modifiers={['primary', 'hero']}>Button</Button>)
  .add('as link', () => (
    <p>
      <Button modifiers={['link']}>Link</Button> |{' '}
      <Button modifiers={['link-error']}>Error</Button> |{' '}
      <Button modifiers={['link-warning']}>Warning</Button>
    </p>
  ))
  .add('with icon', () => <Button dashicon="wordpress">Button</Button>);

storiesOf('Button/ButtonGroup', module)
  .addDecorator(withReadme(readme))
  .add('standard', () => (
    <ButtonGroup>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>
  ));
