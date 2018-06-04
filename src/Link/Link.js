import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Table from '../Table/Table';

export const applyLinkStyles = () => css`
  color: #0073aa;
  transition-property: border, background, color;
  transition-duration: 0.05s;
  transition-timing-function: ease-in-out;

  &:hover,
  &:active {
    color: #00a0d2;
    background: none;
  }

  &:focus {
    color: #124964;
    box-shadow: 0 0 0 1px #5b9dd9, 0 0 2px 1px rgba(30, 140, 190, 0.8);
  }

  ${Table} & {
    text-decoration: none;
  }
`;

const Link = styled.a`
  ${applyLinkStyles};
`;

Link.propTypes = {
  href: PropTypes.string.isRequired,
};

/** @component */
export default Link;
