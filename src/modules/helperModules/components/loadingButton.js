import React, { Component } from 'react';
import { Button } from 'reactstrap';

import '../css/loadingButton.css';
import spinner from'../../../img/spinner.gif';

class LoadingButton extends Component {
  render() {
    const { processing, text } = this.props;

    let btnProps = {};
    for ( let key in this.props ) {
      if( key === 'processing' || key === 'text' )
        continue;

      btnProps[key] = this.props[key];
    }

    return (
      <Button {...btnProps} className={'loading-button'} disabled={processing} >
        { text }
        <img src={spinner} className={'spiner ' + (processing ? '' : 'disabled')} />
      </Button>
    );
  }
}

export default LoadingButton;
