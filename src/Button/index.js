import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import {
  applyStyleModifiers,
  styleModifierPropTypes,
} from 'styled-components-modifiers';
import { media } from '../utils';
import { Dashicons, applyDashicon } from '../Dashicon';
import { applyLinkStyles } from '../Link';

const ButtonGroup = styled.div`
  position: relative;
  display: inline-block;
  font-size: 0;
  white-space: nowrap;
  vertical-align: middle;
`;

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
    height: auto;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border: 0;
    border-radius: 0;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-align: left;
    background: none;
    outline: none;
    cursor: pointer;
    
    ${applyLinkStyles()};
  `,
  'link-error': () => `
    ${MODIFIER_CONFIG.link()};

    color: #aa0000;

    &:hover,
    &:focus {
      color: #dc3232;
    }
  `,
  'link-warning': () => `
    ${MODIFIER_CONFIG.link()};

    color: #d98500;

    &:hover,
    &:focus {
      color: #d98500;
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
    props.dashicon &&
    css`
      ${applyDashicon(props.dashicon)};

      &::before {
        transform: translate3d(0, 3px, 0);
      }
    `};

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
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG),
  disabled: PropTypes.bool,
  dashicon: PropTypes.oneOf([...Object.keys(Dashicons)]),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export { Button, ButtonGroup };
