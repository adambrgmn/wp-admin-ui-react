import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';

/**
 * Use media to apply responsive styles
 * Usage:
 *  ${media.tablet`width: 50%;`};
 */
const media = {
  tablet: (...args) => css`
    @media (max-width: 782px) {
      ${css(...args)};
    }
  `,
};

class WithState extends React.Component {
  static propTypes = {
    initialState: PropTypes.object.isRequired, // eslint-disable-line
    resetAfter: PropTypes.number,
    children: PropTypes.func.isRequired,
  };

  static defaultProps = {
    resetAfter: 0,
  };

  state = this.props.initialState;

  timeoutID = null;

  componentWillUnmount() {
    if (this.timeoutID) {
      clearTimeout(this.timeoutID);
    }
  }

  publicSetState = newState => {
    this.setState(newState, () => {
      if (this.props.resetAfter) {
        this.timeoutID = setTimeout(
          () => this.setState(() => ({ ...this.props.initialState })),
          this.props.resetAfter,
        );
      }
    });
  };

  render() {
    return this.props.children({
      state: this.state,
      setState: newState => this.publicSetState(newState),
    });
  }
}

export { media, WithState };
