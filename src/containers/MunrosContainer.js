import React, { Component } from 'react';
import MunrosMap from '../components/MunrosMap.js';
import MunroDetailBox from '../components/MunroDetailBox.js';
import comments from '../data/seed_comments.js';

class MunrosContainer extends Component {

  constructor() {
    super()
    this.state = {
      comments: comments,
      munrosData: [],
      selectedMunro: null
    }
    this.handleMunroSelect = this.handleMunroSelect.bind(this);
    this.combineMunrosAndCommentsData = this.combineMunrosAndCommentsData.bind(this);
  }

  componentDidMount() {
    fetch('https://munroapi.herokuapp.com/api/munros')
      .then((response) => response.json())
      .then((munrosData) => {
        const combinedData = this.combineMunrosAndCommentsData(munrosData)
        this.setState({ munrosData: combinedData })
      })
  }

  combineMunrosAndCommentsData(munros) {
    return munros.map(munro => {
      munro.comments = [];
      this.state.comments.forEach(comment => {
        if (comment.smcid === munro.smcid) {
          munro.comments.push(comment);
        }
      });
      return munro;
    });
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
        <header><h1 id='logo'>Munro Tracker</h1></header>
        <div id='content'>
          <div id='map-wrapper'>
            <MunrosMap
              munrosData={this.state.munrosData}
              handleSelect={this.handleMunroSelect}
            />
          </div>
          <div id='detail-wrapper'>
            <MunroDetailBox munro={this.state.selectedMunro} />
          </div>
        </div>
      </>
    );
  }

}

export default MunrosContainer;
