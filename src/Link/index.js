import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import {
  applyStyleModifiers,
  styleModifierPropTypes,
} from 'styled-components-modifiers';
import { Table } from '../Table';
import { PageTitle } from '../PageTitle';

const MODIFIER_CONFIG = {
  button: () => `
    position: relative;
    top: -3px;
    margin-left: 4px;
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 4px 8px;
    font-size: 13px;
    font-weight: 600;
    text-shadow: none;
    line-height: normal;
    text-decoration: none;
    background: #f7f7f7;
    color: #0073aa;
    cursor: pointer;
    outline: 0;

    &:hover {
      border-color: #008EC2;
      background: #00a0d2;
      color: #fff;
    }

    ${PageTitle} + & {
      margin-left: 0;
    }
  `,
};

const applyLinkStyles = () => css`
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
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`;

Link.propTypes = {
  href: PropTypes.string.isRequired,
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG),
};

/** @component */
export { Link, applyLinkStyles };
