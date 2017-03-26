import React, { Component } from 'react'
import Messages from './Messages';
import ChatInput from './ChatInput';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.sendHandler = this.sendHandler.bind(this);

    // Listen for messages from the server
    // this.socket.on('server:message', message => {
    //   this.addMessage(message);
    // });

	firebase.database().ref('messages/').on('value', (snapshot) => {
		const message = snapshot.val()
		if (message != null) {
			this.setState({
				addMessage: message
			})
		}
	})
  }

  sendHandler(message) {
    const messageObject = {
      username: this.props.username,
      message
    };

    // Emit the message to the server
    // this.socket.emit('client:message', messageObject);

	firebase.database().ref('messages/'+messageObject.id).set(messageObject)

    messageObject.fromMe = true;
    this.addMessage(messageObject);
  }

  addMessage(message) {
    // Append the message to the component state
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  render() {
    return (
      <div className="container">
        <h2>Chat Room</h2>
        <Messages messages={this.state.messages} />
        <ChatInput onSend={this.sendHandler} />
      </div>
    );
  }


/*
*
*	Ancienne version
*
*
*/ 
	// constructor(props, context){
	// 	super(props, context)
	// 	this.updateMessage = this.updateMessage.bind(this)
	// 	this.submitMessage = this.submitMessage.bind(this)
	// 	this.componentDidMounth = this.componentDidMounth.bind(this)
	// 	this.state = {
	// 		messages: []
	// 	}
	// }
	// componentDidMounth(){
	// 	console.log('componentDidMounth')
	// 	firebase.database().ref('messages/').on('value', (snapshot) => {
	// 		const currentMessages = snapshot.val()
	// 		if (currentMessages != null) {
	// 			this.setState({
	// 				messages: currentMessages
	// 			})
	// 		}
	// 	})
	// }
	// updateMessage(event){
	// 	console.log('updateMessage:'+ event.target.value)
	// 	this.setState({
	// 		message: event.target.value
	// 	})
	// }
	// submitMessage(event){
	// 	console.log('submitMessage:' + this.state.message)
	// 	const nextMessage = {
	// 		id: this.state.messages.lenght,
	// 		text: this.state.message
	// 	}
	// 	firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)

		
	// }
	// render() {
	// 	const currentMessage = this.state.messages.map((message, i) => {
	// 		return(
	// 			<p key={message.id}>{message.text}</p>
	// 		)
	// 	})
	// 	return (
	// 		<div> 
	// 			<h2> Here is the ChatRoom </h2>
	// 			<div> 
	// 				{currentMessage} 
	// 			</div>
	// 			<input onChange={this.updateMessage} type="text" placeholder="Message" />
	// 			<br />
	// 			<button onClick={this.submitMessage}> Submit Message</button>
	// 		</div>
			
	// 	)
	// }
}

ChatRoom.defaultProps = {
  username: 'Anonymous'
};
export default ChatRoom;