import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";

import { TreeMedia } from '../components';
import { LeftAside, MainLoad } from '../../helperModules';

import '../css/page2.css';
import { getPage2Content } from "../../../actions/page2Content";
import { userIsLogined } from "../../../selectors/user";

class Page2 extends Component {
  render() {
    const { data, wasLoading, userIsLogined } = this.props;

    if( !userIsLogined )
      return <Redirect to="/login" />;

    return (
      <main className={'main-main'}>
        <LeftAside/>
        <content className={'main-content'}>
          {
            !wasLoading ?
              <MainLoad /> :
              <TreeMedia data={data}/>
          }
        </content>
      </main>
    );
  }

  componentDidMount() {
    if( !this.props.wasLoading )
      this.props.getPage2Content();
  }
}

const mapStateToProps = state => ({
  data: state.page2Content.data,
  wasLoading: state.page2Content.wasLoading,
  userIsLogined: userIsLogined(state)
});

const mapDispatchToProps = dispatch => ({
  getPage2Content: ( onSuccess ) => dispatch(getPage2Content(onSuccess))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page2);