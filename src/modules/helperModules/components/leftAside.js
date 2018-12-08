import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';

import { LoadingButton, ForGroup } from './';
import { userLogouting } from '../../../selectors/user';
import { userLogout } from "../../../actions/user";
import { isMobileScreen } from '../../../helpers/screen';

import '../css/leftAside.css';

class LeftAside extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: isMobileScreen(document.body.clientWidth),
      isMobileScreen: isMobileScreen(document.body.clientWidth)
    };

    this.toggleBar = this.toggleBar.bind(this);
    this.onResizeWindow = this.onResizeWindow.bind(this);
  }

  toggleBar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  onResizeWindow( e ) {
    const isMobScr = isMobileScreen( e.target.innerWidth );

    if( this.state.isMobileScreen !== isMobScr ) {
      this.setState({
        isMobileScreen: isMobScr,
        collapsed: isMobScr
      });
    }
  }

  render() {
    const { router, userLogouting, userLogout } = this.props;
    const { collapsed, isMobileScreen } = this.state;

    return (
      <aside className={'main-left-aside'}>
        <Navbar color="faded" light>
          <NavbarToggler onClick={this.toggleBar} className={'collapse-btn' + (isMobileScreen ? '' : ' disabled')} />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem><Link to='/dashboard' className={router === '/dashboard' ? 'active' : ''} >Дашборд</Link></NavItem>
              <NavItem><Link to='/page1' className={router === '/page1' ? 'active' : ''} >Страница 1</Link></NavItem>
              <NavItem><Link to='/page2' className={router === '/page2' ? 'active' : ''} >Страница 2</Link></NavItem>
              <ForGroup group={1}>
                <NavItem><Link to='/page3' className={router === '/page3' ? 'active' : ''} >Страница 3</Link></NavItem>
              </ForGroup>
              <NavItem><LoadingButton onClick={userLogout} text={'Logout'} processing={userLogouting} /></NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </aside>
    );
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResizeWindow);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResizeWindow);
  }
}

const mapStateToProps = state => ({
  router: state.router.location.pathname,
  userLogouting: userLogouting(state)
});

const mapDispatchToProps = dispatch => ({
  userLogout: () => dispatch(userLogout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeftAside);
