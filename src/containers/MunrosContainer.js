import React, { Component } from 'react';
import MunrosMap from '../components/MunrosMap';
import MunroDetailBox from '../components/MunroDetailBox';
import comments from '../data/seed_comments';

class MunrosContainer extends Component {

  constructor() {
    super()
    this.state = {
      comments: comments,
      munrosData: [],
      selectedMunro: null
    }
    this.handleMunroSelect = this.handleMunroSelect.bind(this)
  }

  componentDidMount() {
    fetch('https://munroapi.herokuapp.com/api/munros')
      .then((response) => response.json())
      .then((munrosData) => this.setState({ munrosData }))
  }

  handleMunroSelect(id) {
    const selectedMunro = this.state.munrosData.find(munro => {
      return munro.smcid === id;
    });
    this.setState({ selectedMunro });
  }

  render() {
    return (
      <>
        <MunrosMap
          munrosData={this.state.munrosData}
          handleSelect={this.handleMunroSelect} />
        <MunroDetailBox munro={this.state.selectedMunro} />
      </>
    );
  }

}

export default MunrosContainer;
