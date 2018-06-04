import React from 'react';
import { storiesOf } from '@storybook/react';
import Notice from './Notice';
import { WithState } from '../utils';

storiesOf('Notice', module)
  .add('standard', () => <Notice>Something to take note about</Notice>)
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
