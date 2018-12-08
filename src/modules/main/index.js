import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";

import { userIsLogined } from '../../selectors/user';


class Main extends Component {
  render() {
    const { userIsLogined } = this.props;

    return (
      <Redirect to={userIsLogined ? "/dashboard" : "/login" } />
    );
  }
}

const mapStateToProps = state => ({
  userIsLogined: userIsLogined(state)
});

export default connect(
  mapStateToProps
)(Main);
