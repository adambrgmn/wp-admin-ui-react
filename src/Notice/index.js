import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import {
  applyStyleModifiers,
  styleModifierPropTypes,
} from 'styled-components-modifiers';

const MODIFIER_CONFIG = {
  info: () => `
    border-left-color: #00a0d2;
  `,
  success: () => `
    border-left-color: #46b450;
  `,
  warning: () => `
    border-left-color: #ffb900;
  `,
  error: () => `
    border-left-color: #dc3232;
  `,
};

const NoticeDismiss = styled.button`
  position: absolute;
  top: 50%;
  right: 1px;
  margin: 0;
  border: none;
  padding: 9px;
  background: none;
  color: #72777c;
  cursor: pointer;
  transform: translateY(-50%);

  &:hover::before,
  &:active::before,
  &:focus::before {
    color: #cc0000;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px #5b9dd9, 0 0 2px 1px rgba(30, 140, 190, 0.8);
  }

  &::before {
    content: '\f153';
    display: block;
    height: 20px;
    width: 20px;
    background: none;
    color: #72777c;
    font-family: dashicons;
    font-size: 16px;
    font-weight: normal;
    line-height: 20px;
    text-align: center;
    speak: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const NoticeWrapper = styled.div`
  margin: 5px 15px 2px;
  border-left: 4px solid #fff;
  padding: 10px 20px;
  background: #fff;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out,
    visibility 0.5s ease-in-out;

  ${props =>
    props.dismissable &&
    css`
      padding-right: 38px;
      position: relative;
    `};

  ${props =>
    props.hide &&
    css`
      transform: translateY(-100%);
      opacity: 0;
      visibility: hidden;
    `};

  ${applyStyleModifiers(MODIFIER_CONFIG)};
`;

function Notice({ onClick, dismissable, hide, children, ...props }) {
  return (
    <NoticeWrapper hide={hide} {...props}>
      {children}
      {dismissable && <NoticeDismiss onClick={onClick} />}
    </NoticeWrapper>
  );
}

Notice.propTypes = {
  onClick: PropTypes.func,
  dismissable: PropTypes.bool,
  hide: PropTypes.bool,
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG),
  children: PropTypes.node.isRequired,
};

Notice.defaultProps = {
  onClick: null,
  dismissable: true,
  hide: false,
  modifiers: ['info'],
};

/** @component */
export { Notice };
