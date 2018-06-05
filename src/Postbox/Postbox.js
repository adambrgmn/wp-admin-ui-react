import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { applyDashicon } from '../Dashicon/Dashicon';

const PostboxWrapper = styled.div`
  position: relative;
  min-width: 255px;
  margin-bottom: 20px;
  border: 1px solid #e5e5e5;
  padding: 0;
  font-size: 14px;
  line-height: 1;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);
`;

const PostboxHandle = styled.button`
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  width: 36px;
  height: 36px;
  margin: 0;
  padding: 0;
  border: 0;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: #72777c;
  background: none;
  cursor: pointer;

  ${props => applyDashicon(props.closed ? 'arrow-down' : 'arrow-up')};
`;

const PostboxTitle = styled.h2`
  font-size: 14px;
  margin: 0;
  border-bottom: 1px solid #eee;
  padding: 8px 12px;
  line-height: 1.4;
`;

const PostboxInner = styled.div`
  display: ${props => (props.closed ? 'none' : 'initial')};
  display: ${props => (props.closed ? 'none' : 'contents')};
`;

function Postbox({ className, title, closed, onToggle, children }) {
  return (
    <PostboxWrapper className={className}>
      <PostboxHandle closed={closed} onClick={onToggle} />
      <PostboxTitle>{title}</PostboxTitle>
      <PostboxInner closed={closed}>{children}</PostboxInner>
    </PostboxWrapper>
  );
}

Postbox.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  closed: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Postbox.defaultProps = {
  className: null,
  closed: false,
};

export default Postbox;
