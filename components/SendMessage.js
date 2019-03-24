// NPM Dependencies
import React, { Component } from 'react';

// File Dependencies
import '../styles/SendMessage.scss';

class SendMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const { data } = this.state;
    this.props.sarus.send(data);
    if (this.props.sarus.ws.readyState === 1) {
      this.props.incrementCount('sent');
    }
    this.setState({ data: '' });
  }

  render() {
    const { sarus } = this.props;
    if (!sarus) return null;
    return (
      <div>
        <h2>Send a message</h2>
        <form id="send-message" onSubmit={this.onSubmit}>
          <textarea
            name="data"
            value={this.state.data}
            rows="5"
            placeholder="Type either text or a JSON payload here"
            onChange={e => this.setState({ data: e.target.value })}
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default SendMessage;
