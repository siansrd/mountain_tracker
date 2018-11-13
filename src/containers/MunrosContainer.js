import React, { Component } from 'react';
import MunrosMap from '../components/MunrosMap';
import MunroDetailBox from '../components/MunroDetailBox';

class MunrosContainer extends Component {

  constructor() {
    super()
    this.state = {
      munrosData: []
    }
  }

  componentDidMount() {
    fetch('https://munroapi.herokuapp.com/api/munros')
      .then((response) => response.json())
      .then((munrosData) => this.setState({ munrosData }))
  }

  render() {
    return (
      <>
        <MunrosMap munrosData={this.state.munrosData} />
        <MunroDetailBox />
      </>
    );
  }

}

export default MunrosContainer;
