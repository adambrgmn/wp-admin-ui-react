import React, { Children, cloneElement } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Table from './Table';

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

export default TableActionRow;
