import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  render() {
    const scr = "https://media2.giphy.com/media/gvw7EmwFDEGIV7Ko1T/giphy.gif?cid=ecf05e4757ce45e68c3a31ada3ab2f60259e884ab8e46a4d&rid=giphy.gif";
    return (
      <img src={scr} alt="" className="gif" />
    );
  }
}

export default Gif;
