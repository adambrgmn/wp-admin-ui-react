import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const PageTitle = styled.h1`
  margin: 0;
  padding: 9px 0 4px 0;
  font-size: 23px;
  font-weight: 400;
  line-height: 29px;
  color: #23282d;

  ${props =>
    props.inline &&
    css`
      display: inline-block;
      margin-right: 5px;
    `};
`;

PageTitle.propTypes = {
  inline: PropTypes.bool,
};

PageTitle.defaultProps = {
  inline: false,
};

export { PageTitle };
