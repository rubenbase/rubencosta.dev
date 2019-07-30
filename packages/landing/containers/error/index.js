import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { ErrorWrapper, ErrorContent } from './error.style';

export default class Error404 extends Component {
  static propTypes = {
    imageWrapper: PropTypes.object,
  };

  render() {
    return (
      <ErrorWrapper>
        <ErrorContent>
          <Link href="/">
            <a>
              <button>Go home</button>
            </a>
          </Link>
        </ErrorContent>
      </ErrorWrapper>
    );
  }
}

Error404.defaultProps = {
  imageWrapper: {
    mb: ['40px', '55px'],
  },
};
