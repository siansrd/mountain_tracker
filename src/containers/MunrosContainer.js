import React, { Component, Fragment } from 'react'
import MunrosMap from '../components/MunrosMap.js'
import MunroDetailBox from '../components/MunroDetailBox.js'

class MunrosContainer extends Component {

  render() {
    return (
      <>
        <MunrosMap />
        <MunroDetailBox />
      </>
    )
  }

}

export default MunrosContainer
