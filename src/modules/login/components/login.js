import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";

import { userIsLogined } from '../../../selectors/user';

import { LoginForm, HelperUsers } from './';

import '../css/login.css';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userIsLogined } = this.props;

    if( userIsLogined )
      return <Redirect to="/dashboard" />;

    return (
      <content className={'main-content page-login'}>
        <LoginForm />
        <HelperUsers />
      </content>
    );
  }
}

const mapStateToProps = state => ({
  userIsLogined: userIsLogined(state)
});

export default connect(
  mapStateToProps
)(Login);