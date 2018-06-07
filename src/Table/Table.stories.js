/* eslint-disable react/no-array-index-key */
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { Table, TableActionRow } from './';
import { Link } from '../Link';
import { Button } from '../Button';
import { ScreenReaderText } from '../ScreenReaderText';
import readme from './README.md';

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
  .addDecorator(withReadme(readme))
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
  ))
  .add('with action row', () => (
    <Table striped>
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Remove</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <div>Hello world</div>
            <TableActionRow>
              <Button>Preview</Button>
              <Button modifiers={['link-warning']}>Hide</Button>
              <Button modifiers={['link-error']}>Remove</Button>
            </TableActionRow>
          </td>
          <td>Hello world</td>
          <td>Hello world</td>
        </tr>
        <tr>
          <td>
            <div>Hello world</div>
            <TableActionRow>
              <Button>Preview</Button>
              <Button modifiers={['link-warning']}>Hide</Button>
              <Button modifiers={['link-error']}>Remove</Button>
            </TableActionRow>
          </td>
          <td>Hello world</td>
          <td>Hello world</td>
        </tr>
        <tr>
          <td>
            <div>Hello world</div>
            <TableActionRow>
              <Button>Preview</Button>
              <Button modifiers={['link-warning']}>Hide</Button>
              <Button modifiers={['link-error']}>Remove</Button>
            </TableActionRow>
          </td>
          <td>Hello world</td>
          <td>Hello world</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Remove</th>
        </tr>
      </tfoot>
    </Table>
  ));
