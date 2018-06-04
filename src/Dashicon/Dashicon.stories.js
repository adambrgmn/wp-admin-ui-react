import React from 'react';
import { storiesOf } from '@storybook/react';
import Dashicon, { Dashicons } from './Dashicon';

storiesOf('Dashicon', module).add('standard', () => (
  <div>
    <ul>
      {Object.keys(Dashicons).map(icon => (
        <li key={icon}>
          <Dashicon dashicon={icon} /> – <code>{icon}</code>
        </li>
      ))}
    </ul>
  </div>
));
