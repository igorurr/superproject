import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";

import { LeftAside, ForGroup } from '../../helperModules';

import '../css/page3.css';
import {userIsLogined} from "../../../selectors/user";

class Page3 extends Component {
  render() {
    const { userIsLogined } = this.props;

    if( !userIsLogined )
      return <Redirect to="/login" />;

    return (
      <ForGroup group={1}>
        <main className={'main-main'}>
          <LeftAside/>
          <content className={'main-content'}>
            <article>
              Нечто, доступное только пользователю из Г1.1
            </article>
          </content>
        </main>
      </ForGroup>
    );
  }
}

const mapStateToProps = state => ({
  //items: getSearchedVacancies(state),
  userIsLogined: userIsLogined(state)
});

const mapDispatchToProps = dispatch => ({
  //updateMapSelectedAddress: newAddress => dispatch(updateMapSelectedAddress(newAddress)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page3);