import React, { Component } from 'react';

import { NodeMedia } from './';
import { normalToRecurrentTree } from '../helpers/treeMedia';

class TreeMedia extends Component {
  render() {
    const { data } = this.props;
    const recurrentTreeData = normalToRecurrentTree(data);

    return <NodeMedia key={-1} data={recurrentTreeData} />;
  }
}

export default TreeMedia;
