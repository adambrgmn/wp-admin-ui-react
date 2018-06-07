import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import Dashicon, { Dashicons } from './Dashicon';
import readme from './README.md';

storiesOf('Dashicon', module)
  .addDecorator(withReadme(readme))
  .add('standard', () => (
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
