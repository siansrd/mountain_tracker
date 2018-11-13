import React, { Component, Fragment } from 'react';
import MunrosMap from '../components/MunrosMap';
import MunroDetailBox from '../components/MunroDetailBox';

class MunrosContainer extends Component {

  render() {
    return (
      <>
        <MunrosMap />
        <MunroDetailBox />
      </>
    );
  }

}

export default MunrosContainer;
