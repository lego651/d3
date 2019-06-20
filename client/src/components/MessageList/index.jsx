import React, { Component } from 'react';

import Message from '../Message'
import './style.css'

class MessageList extends Component {
  componentDidMount() {
    this.scrollToBottom()
  }
  componentDidUpdate() {
    this.scrollToBottom()
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.messages.length !== nextProps.messages.length
  }
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  render(){
    const { messages, username } = this.props
    return (
      <div className="message-list-container">
        {messages.map(message => <Message key={message.id}
                                          item={message}
                                          username={username} />
        )}
        <div ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </div>
    )
  }
}

export default MessageList
