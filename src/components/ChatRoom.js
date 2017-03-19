import React, { Component } from 'react'

class ChatRoom extends Component {
	constructor(props, context){
		super(props, context)
		this.updateMessage = this.updateMessage.bind(this)
		this.submitMessage = this.submitMessage.bind(this)
		this.state = {
			messages: []
		}
	}
	updateMessage(event){
		console.log('updateMessage:'+ event.target.value)
		this.setState({
			message: event.target.value
		}
		})
	}
	submitMessage(event){
		console.log('submitMessage:' + this.state.message)
		const nextMessage = {
			id: this.state.messages.lenght,
			text: this.state.message
		}
		var list = Object.assign([], this.state.messages)
		list.push(nextMessage)
		this.setState({
			messages: list
		})
	}
	render() {
		const currentMessage = this.state.messages.map((message, i) => {
			return(
				<p key={message.id}>{message.text}</p>
			)
		})
		return (
			<div> 
				<h2> Here is the ChatRoom </h2>
				<div> 
					{currentMessage} 
				</div>
				<input onChange={this.updateMessage} type="text" placeholder="Message" />
				<br />
				<button onClick={this.submitMessage}> Submit Message</button>
			</div>
			
		)
	}
}

export default ChatRoom