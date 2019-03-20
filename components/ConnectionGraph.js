import React, { Component } from 'react';

class ConnectionGraph extends Component {
  render() {
    const { sarus } = this.props;
    if (!sarus) return <div />;
    return <h2>Connection Graph</h2>;
  }
}

export default ConnectionGraph;
