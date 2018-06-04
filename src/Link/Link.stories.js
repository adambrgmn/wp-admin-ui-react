import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from './Link';

storiesOf('Link', module).add('standard', () => (
  <p>
    This is <Link href="/">a link</Link>
  </p>
));
