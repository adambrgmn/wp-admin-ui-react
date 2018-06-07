import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { Notice } from './';
import { WithState } from '../utils';
import readme from './README.md';

storiesOf('Notice', module)
  .addDecorator(withReadme(readme))
  .add('standard', () => (
    <div>
      <Notice dismissable={false}>Notification</Notice>
      <Notice dismissable={false} modifiers={['success']}>
        Notification
      </Notice>
      <Notice dismissable={false} modifiers={['warning']}>
        Notification
      </Notice>
      <Notice dismissable={false} modifiers={['error']}>
        Notification
      </Notice>
    </div>
  ))
  .add('success', () => (
    <Notice modifiers={['success']}>Something to be happy about</Notice>
  ))
  .add('warning', () => (
    <Notice modifiers={['warning']}>Something to be a bit worried about</Notice>
  ))
  .add('error', () => (
    <Notice modifiers={['error']}>Something to be afraid of!</Notice>
  ))
  .add('with click handler', () => (
    <WithState initialState={{ hide: false }} resetAfter={2000}>
      {({ state, setState }) => (
        <Notice hide={state.hide} onClick={() => setState({ hide: true })}>
          Something to be happy about
        </Notice>
      )}
    </WithState>
  ));
