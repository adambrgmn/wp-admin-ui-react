import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { PageTitle } from './';
import { Link } from '../';
import readme from './README.md';

storiesOf('PageTitle', module)
  .addDecorator(withReadme(readme))
  .add('standard', () => <PageTitle>The Page Title</PageTitle>)
  .add('inline', () => (
    <div>
      <PageTitle inline>The Page Title</PageTitle>
      <Link href="/" modifiers={['button']}>
        Action
      </Link>
    </div>
  ));
