import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import {
  applyStyleModifiers,
  styleModifierPropTypes,
} from 'styled-components-modifiers';
import ButtonGroup from './ButtonGroup';
import { media } from '../utils';
import { Dashicons, applyDashicon } from '../Dashicon/Dashicon';

const MODIFIER_CONFIG = {
  large: () => `
    height: 30px;
    line-height: 20px;
    padding: 0 12px 2px;
  `,
  small: () => `
    height: 24px;
    line-height: 22px;
    padding: 0 8px 1px;
    font-size: 11px;
  `,
  hero: () => `
    font-size: 14px;
    height: 46px;
    line-heght: 44px;
    padding: 0 36px;
  `,
  secondary: () => ``,
  primary: ({ props }) => `
    border-color: #0073aa #006799 #006799;
    text-decoration: none;
    color: #ffffff;
    background: #0085ba;
    box-shadow: 0 1px 0 #006799;
    text-shadow: 
      0 -1px 1px #006799,
      1px 0 1px #006799,
      0 1px 1px #006799,
      -1px 0 1px #006799;

    &:hover,
    &:focus {
      border-color: #006799;
      color: #ffffff;
      background: #008ec2;
    }

    &:focus {
      box-shadow:
        0 1px 0 #0073aa,
		    0 0 2px 1px #33b3db;
    }

    &:active {
      border-color: #006799;
      background: #0073aa;
      box-shadow: inset 0 2px 0 #006799;
      vertical-align: top;
    }

    &[disabled],
    &:disabled {
      border-color: #007cb2 !important;
      color: #66c6e4 !important;
      background: #008ec2 !important;
      box-shadow: none !important;
      text-shadow: 0 -1px 0 rgba( 0, 0, 0, 0.1 ) !important;
      cursor: default;
    }

    ${() =>
      props.modifiers.includes('hero') &&
      css`
        box-shadow: 0 2px 0 #006799;

        &:active {
          box-shadow: inset 0 3px 0 #006799;
        }
      `}

    ${ButtonGroup} > & {
      z-index: 100;
    }
  `,
  link: () => `
    margin: 0;
    border: 0;
    border-radius: 0;
    padding: 0;
    text-align: left;
    text-decoration: underline;
    color: #0073aa;
    background: none;
    box-shadow: none;
    outline: none;
    cursor: pointer;
    transition-property: border, background, color;
    transition-duration: .05s;
    transition-timing-function: ease-in-out;

    &:hover,
    &:active {
      color: #00a0d2;
    }

    &:focus {
      color: #124964;
      box-shadow:
        0 0 0 1px #5b9dd9,
        0 0 2px 1px rgba(30, 140, 190, .8);
    }
  `,
  'link-delete': () => `
    color: #aa0000;

    &:hover,
    &:focus {
      color: #dc3232;
    }
  `,
};

const Button = styled.button`
  display: inline-block;
  height: 28px;
  margin: 0;
  border-width: 1px;
  border-style: solid;
  border-color: #cccccc;
  border-radius: 3px;
  padding: 0 10px 1px;
  font-size: 13px;
  line-height: 26px;
  text-decoration: none;
  color: #555;
  background: #f7f7f7;
  box-shadow: 0 1px 0 #cccccc;
  vertical-align: top;
  cursor: pointer;
  white-space: nowrap;
  box-sizing: border-box;
  -webkit-appearance: none;

  p & {
    vertical-align: baseline;
  }

  &::-moz-focus-inner {
    border-width: 0;
    border-style: none;
    padding: 0;
  }

  &:active,
  &:focus {
    outline: none;
  }

  &:hover,
  &:focus {
    border-color: #999;
    color: #23282d;
    background: #fafafa;
  }

  &:focus {
    border-color: #5b9dd9;
    box-shadow: 0 0 3px rgba(0, 115, 170, 0.8);
  }

  &:active {
    border-color: #999;
    background: #eee;
    box-shadow: inset 0 2px 5px -3px rgba(0, 0, 0, 0.5);
    transform: translateY(1px);
  }

  &[disabled],
  &:disabled {
    border-color: #ddd !important;
    color: #a0a5aa !important;
    background: #f7f7f7 !important;
    box-shadow: none !important;
    text-shadow: 0 1px 0 #fff !important;
    cursor: default;
    transform: none !important;
  }

  ${ButtonGroup} > & {
    display: inline-block;
    margin-right: -1px;
    border-radius: 0;
    z-index: 10;
  }

  ${ButtonGroup} > &:hover {
    z-index: 20;
  }

  ${ButtonGroup} > &:first-child {
    border-radius: 3px 0 0 3px;
  }

  ${ButtonGroup} > &:last-child {
    border-radius: 0 3px 3px 0;
  }

  ${ButtonGroup} > &:focus {
    position: relative;
    z-index: 1;
  }

  ${props =>
    props.dashicons &&
    css`
      &::before {
        display: inline-block;
        width: 20px;
        height: 20px;
        font-size: 20px;
        line-height: 1;
        font-family: dashicons;
        text-decoration: inherit;
        font-weight: normal;
        font-style: normal;
        vertical-align: top;
        text-align: center;
        transition: color 0.1s ease-in 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `};

  ${props => props.dashicon && applyDashicon(props.dashicon)};

  ${media.tablet`
    padding: 6px 14px;
		line-height: normal;
		font-size: 14px;
		vertical-align: middle;
		height: auto;
		margin-bottom: 4px;
  `};

  ${applyStyleModifiers(MODIFIER_CONFIG)};
`;

Button.propTypes = {
  /**
   * Available modifiers: large, small, hero, secondary, primary, link, link-delete
   */
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG),
  /**
   * Disabled button
   */
  disabled: PropTypes.bool,
  /**
   * Optional icon (see /icons)
   */
  dashicon: PropTypes.oneOf([...Object.keys(Dashicons)]),
  /**
   * Click handler
   */
  onClick: PropTypes.func,
  /**
   * Button label
   */
  children: PropTypes.node.isRequired,
};

/** @component */
export default Button;
