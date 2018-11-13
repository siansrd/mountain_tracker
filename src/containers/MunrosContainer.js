import React, { Component } from 'react';
import MunrosMap from '../components/MunrosMap';
import MunroDetailBox from '../components/MunroDetailBox';

class MunrosContainer extends Component {

  componentDidMount() {
    fetch('https://munroapi.herokuapp.com/api/munros')
      .then((response) => response.json())
      .then((data) => this.setState({ data }))
  }

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
