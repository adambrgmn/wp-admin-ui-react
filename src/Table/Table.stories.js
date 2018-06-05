/* eslint-disable react/no-array-index-key */
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Table from './Table';
import { Link } from '../Link';
import { Button } from '../Button';
import { ScreenReaderText } from '../ScreenReaderText';

const DefaultTableContent = () => {
  const HeadRow = () => (
    <tr>
      <th>Title</th>
      <th>Date</th>
      <th>Remove</th>
    </tr>
  );

  return (
    <Fragment>
      <thead>
        <HeadRow />
      </thead>

      <tbody>
        {Array.from({ length: 10 }).map((_, i) => (
          <tr key={i}>
            <th>
              <Link href="/">Hello world {i}</Link>
            </th>
            <td>2018-01-0{i}</td>
            <td>
              <Button dashicon="trash">
                <ScreenReaderText>Remove</ScreenReaderText>
              </Button>
            </td>
          </tr>
        ))}
      </tbody>

      <tfoot>
        <HeadRow />
      </tfoot>
    </Fragment>
  );
};

storiesOf('Table', module)
  .add('standard', () => (
    <Table>
      <DefaultTableContent />
    </Table>
  ))
  .add('striped', () => (
    <Table striped>
      <DefaultTableContent />
    </Table>
  ))
  .add('fixed', () => (
    <Table fixed striped>
      <DefaultTableContent />
    </Table>
  ))
  .add('hover', () => (
    <Table striped hover>
      <DefaultTableContent />
    </Table>
  ));
