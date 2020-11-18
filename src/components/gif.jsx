import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  render() {
    const scr = `https://media2.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e47e51801218067dcc606d0eaa0ba2a79d22b7b01f8&rid=giphy.gif`;
    return (
      <img src={scr} alt="" className="gif" />
    );
  }
}

export default Gif;
