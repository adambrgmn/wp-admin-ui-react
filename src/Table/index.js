import React, { Children, cloneElement } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Table = styled.table`
  margin: 0;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #e5e5e5;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);
  background: #ffffff;

  & td,
  & th {
    padding: 8px 10px;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5em;
    text-align: left;
    color: #555555;
    vertical-align: top;
  }

  & tbody th {
    font-size: 14px;
    font-weight: 600;
  }

  & thead th,
  & thead td {
    border-bottom: 1px solid #e1e1e1;
    vertical-align: bottom;
  }

  & tfoot th,
  & tfoot td {
    border-top: 1px solid #e1e1e1;
    border-bottom: none;
  }

  & thead tr th,
  & thead tr td,
  & tfoot tr th,
  & tfoot tr td {
    color: #32373c;
  }

  ${props =>
    props.striped &&
    css`
      & > tbody > :nth-child(event) {
        background-color: #ffffff;
      }

      & > tbody > :nth-child(odd) {
        background-color: #f9f9f9;
      }
    `};

  ${props =>
    props.fixed &&
    css`
      table-layout: fixed;
    `};

  ${props =>
    props.hover &&
    css`
      & tbody tr:hover {
        background-color: #f5f5f5;
      }
    `};
`;

Table.propTypes = {
  striped: PropTypes.bool,
  fixed: PropTypes.bool,
  hover: PropTypes.bool,
};

const TableActionRowWrapper = styled.div`
  position: relative;
  left: -9999em;
  padding: 2px 0 0;
  font-size: 13px;
  font-weight: 400;
  color: #dddddd;

  ${Table} tr:hover & {
    position: static;
  }
`;

function TableActionRow({ children }) {
  const newChildren = Children.toArray(children).reduce((acc, child) => {
    if (typeof child === 'string' && !child.type) return acc;

    const newChild = cloneElement(
      child,
      { modifiers: ['link', ...(child.props.modifiers || [])] },
      child.props.children,
    );

    return [...acc, newChild, ' | '];
  }, []);

  return (
    <TableActionRowWrapper>{newChildren.slice(0, -1)}</TableActionRowWrapper>
  );
}

TableActionRow.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export { Table, TableActionRow };
