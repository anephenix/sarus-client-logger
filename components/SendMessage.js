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
    this.setState({ data: '' });
  }

  render() {
    const { sarus } = this.props;
    if (!sarus) return null;
    return (
      <div>
        <form id="send-message" onSubmit={this.onSubmit}>
          <textarea
            name="data"
            value={this.state.data}
            onChange={e => this.setState({ data: e.target.value })}
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default SendMessage;
