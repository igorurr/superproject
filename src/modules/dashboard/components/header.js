import React, { Component } from 'react';

import '../css/dashboardHeader.css';
import {connect} from "react-redux";

import { ForGroup } from '../../helperModules';

class Header extends Component {
  render() {
    const { userData } = this.props;

    return (
      <header className={'main-header'}>
        <div>
          <p>Login:</p>
          <p>{ userData.login }</p>
        </div>
        <div>
          <p>Group:</p>
          <p>{ userData.group.name }</p>
        </div>
        <ForGroup group={2}>
        <div>
          <p>Field of Г2:</p>
          <p>{ userData.data.fieldg2 }</p>
        </div>
        </ForGroup>
        <ForGroup group={0}>
        <div>
          <p>Field of Г1:</p>
          <p>{ userData.data.fieldg1 }</p>
        </div>
        </ForGroup>
        <ForGroup group={1}>
        <div>
          <p>Field of Г1 > Г1.1:</p>
          <p>{ userData.data.fieldg11 }</p>
        </div>
        </ForGroup>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.user.data
});

export default connect(
  mapStateToProps
)(Header);
