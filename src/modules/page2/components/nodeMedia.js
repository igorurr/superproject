import React, { Component } from 'react';

import { MediaContainer } from './';

class NodeMedia extends Component {
  render() {
    const { data } = this.props;

    return data.map( (el) => (
      <MediaContainer
        key={el.id}
        id={el.id}
        icon={el.icon}
        header={el.header}
        content={el.content}
        childs={
          <NodeMedia key={el.id} data={el.childs} />
        }
      />
    ) );
  }
}

export default NodeMedia;
