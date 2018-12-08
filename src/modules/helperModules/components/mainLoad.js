import React, { Component } from 'react';

import '../css/mainLoad.css';
import spinner from'../../../img/spinner.gif';

class MainLoad extends Component {
  render() {
    return (
      <div className={'spiner-container'}>
        <img src={spinner} className={'spiner'} />
      </div>
    );
  }
}

export default MainLoad;
