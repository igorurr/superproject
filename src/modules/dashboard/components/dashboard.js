import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";

import { LeftAside, ForGroup } from '../../helperModules';
import { Header } from './';

import { userLogout } from "../../../actions/user";
import { userIsLogined } from '../../../selectors/user';

class Dashboard extends Component {
  render() {
    const { userIsLogined } = this.props;

    if( !userIsLogined )
      return <Redirect to="/login" />;

    return (
      <>
        <Header/>
        <main className={'main-main'}>
          <LeftAside/>
          <content className={'main-content'}>
            <ForGroup group={0}>
              <article>
                Этот текст виден только пользователю из группы Г1
                <ForGroup group={1}>
                  <p>
                    Это компонент виден только пользователям из Г1.1 в компоненте видном только пользователю из Г1
                  </p>
                </ForGroup>
                <p>
                  А это снова текст виден только пользователю из группы Г1
                </p>
              </article>
            </ForGroup>
            <ForGroup group={1}>
              <article>
                А меня видно только из Г1.1
              </article>
            </ForGroup>
            <ForGroup group={2}>
              <article>
                А меня видно только из Г2
              </article>
            </ForGroup>
          </content>
        </main>
      </>
    );
  }
}

const mapStateToProps = state => ({
  //items: getSearchedVacancies(state),
  userIsLogined: userIsLogined(state)
});

const mapDispatchToProps = dispatch => ({
  //updateMapSelectedAddress: newAddress => dispatch(updateMapSelectedAddress(newAddress)),
  userLogout: () => dispatch(userLogout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
