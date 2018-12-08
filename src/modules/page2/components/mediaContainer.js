import React, {Component} from 'react'
import { Media, Button } from "reactstrap";
import {connect} from "react-redux";

import { LoadingButton, ForGroup } from '../../helperModules/';

import { removePage2Content } from "../../../actions/page2Content";

class MediaContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      removing: false
    };

    this.onRemove = this.onRemove.bind(this);
  }

  onRemove() {
    this.setState({ removing: true });

    this.props.removePage2Content(
      this.props.id,
      () => {
        this.setState({ removing: false });
      }
    );
  }

  render() {
    const {
      icon,
      header,
      content,
      childs
    } = this.props;

    const {
      removing
    } = this.state;

    return (
      <Media>
        <Media left href="#">
          <Media object src={icon} alt={icon} />
        </Media>
        <Media body>
          <Media heading>
            {header}
          </Media>
          {content}
          <nav>
            <ForGroup group={0}>
              <Button outline color="success">like</Button>
              <Button outline color="secondary">dislike</Button>
              <ForGroup group={1}>
                <LoadingButton outline color="danger" text={'remove'} processing={removing} onClick={this.onRemove} />
              </ForGroup>
            </ForGroup>
          </nav>
          {childs}
        </Media>
      </Media>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removePage2Content: ( id, onSuccess ) => dispatch(removePage2Content(id, onSuccess))
});

export default connect(
  null,
  mapDispatchToProps
)(MediaContainer);