// NPM Dependencies
import React, { Component } from 'react';

// File Dependencies
import '../styles/MessageQueue.scss';

class MessageQueue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: null
    };
    this.updateQueueCount = this.updateQueueCount.bind(this);
  }

  updateQueueCount() {
    if (!this.props.sarus) return;
    const previousCount = this.props.counts.queued;
    const currentCount = this.props.sarus.messages.length;

    if (previousCount !== currentCount) {
      this.props.setCount('queued', currentCount);
    }
    if (previousCount > currentCount) {
      const difference = previousCount - currentCount;
      this.props.incrementCount('sent', difference);
    }
  }

  componentDidMount() {
    const check = setInterval(this.updateQueueCount, 100);
    this.setState({ check });
  }

  componentWillUnmount() {
    clearInterval(this.state.check);
  }

  render() {
    const { sarus } = this.props;
    if (!sarus) return <div />;
    const { received, queued, sent } = this.props.counts;
    return (
      <div id="message-queue-component">
        <h2>Message Queue</h2>
        <div id="metrics">
          <div className="metric">
            <div className="count">{received}</div>
            <div className="label">Received</div>
          </div>
          <div className="metric">
            <div className="count">{queued}</div>
            <div className="label">Queued</div>
          </div>
          <div className="metric">
            <div className="count">{sent}</div>
            <div className="label">Sent</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageQueue;
