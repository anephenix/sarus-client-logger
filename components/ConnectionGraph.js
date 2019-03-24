import React, { Component, Fragment } from 'react';
import * as d3 from 'd3';

class Graph extends Component {
  constructor(props) {
    super(props);
  }

  renderConnectedState() {
    const { width, height } = this.props;
    return (
      <g>
        <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#cfff6b" />
          <stop offset="100%" stop-color="#7ed321" />
        </linearGradient>
        <rect
          width={width - 50}
          height={25}
          x={50}
          y={50}
          fill="url(#Gradient2)"
          stroke="#7ed321"
          opacity="0.5"
        />
      </g>
    );
  }

  renderAxis() {
    const { width, height } = this.props;
    return (
      <g>
        <line x1={50} x2={50} y1={0} y2={height - 50} stroke="#fff" />
        <line
          x1={50}
          x2={width}
          y1={height - 50}
          y2={height - 50}
          stroke="#fff"
        />
      </g>
    );
  }

  render() {
    const { width, height } = this.props;
    return (
      <svg width={width} height={height} ref={el => (this.svgElement = el)}>
        {this.renderConnectedState()}
        {this.renderAxis()}
      </svg>
    );
  }
}

class ConnectionGraph extends Component {
  render() {
    const { sarus } = this.props;
    if (!sarus) return <div />;
    return (
      <Fragment>
        <h2>Connection Graph</h2>
        <Graph width={400} height={200} />
      </Fragment>
    );
  }
}

export default ConnectionGraph;
