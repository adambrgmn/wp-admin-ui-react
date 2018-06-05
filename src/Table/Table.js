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
  /**
   * Create a striped table
   */
  striped: PropTypes.bool,
  /**
   * Create a fixed table
   */
  fixed: PropTypes.bool,
  /**
   * Indicate which line is hovered
   */
  hover: PropTypes.bool,
};

/** @component */
export default Table;
