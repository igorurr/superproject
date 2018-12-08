import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import '../css/app.css';

import { Main, Login, Dashboard, Page1, Page2, Page3 } from '../../';
import { MainLoad } from '../../helperModules';
import {connect} from "react-redux";
import {getUserData} from "../../../actions/user";

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { firstLoadUserData } = this.props;
    if( firstLoadUserData )
      return <MainLoad />;

    return (
      <>
        <Route exact path={'/'} component={Main} />
        <Route path={'/login'} component={Login} />
        <Route path={'/dashboard'} component={Dashboard} />
        <Route path={'/page1'} component={Page1} />
        <Route path={'/page2'} component={Page2} />
        <Route path={'/page3'} component={Page3} />
      </>
    );
  }

  componentDidMount() {
    this.props.getUserData();
  }
}

const mapStateToProps = state => ({
  firstLoadUserData: state.user.firstLoad
});

const mapDispatchToProps = dispatch => ({
  getUserData: () => dispatch(getUserData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
