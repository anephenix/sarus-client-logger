// NPM Dependencies
import React from 'react';

class CanvasComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 1280, height: 800 };
  }

  componentDidMount() {
    // this.setState({ width: window.innerWidth, height: innerHeight });
    this.updateCanvas();
  }

  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    const colors = ['#000', '#111', '#222', '#333'];
    const factor = 5;
    const line = 5;

    for (let i = 0; i <= window.innerWidth; i += factor + line) {
      for (let y = 0; y <= window.innerWidth; y += factor + line) {
        const randomNumber = Math.floor(colors.length * Math.random());
        ctx.fillStyle = colors[randomNumber];
        ctx.fillRect(i, y, factor, factor);
      }
    }
    // ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    // draw children “components”
  }
  render() {
    const { width, height } = this.state;
    return <canvas ref="canvas" width={width} height={height} />;
  }
}

export default CanvasComponent;
