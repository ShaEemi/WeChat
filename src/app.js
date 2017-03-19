import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ChatRoom from './components/ChatRoom'

class App extends Component {
	render(){
		return(
			<div>
				<h1> Hello WeChat </h1>
				<form onSubmit={this.usernameSubmitHandler} className="username-container">
					<div>
					  <input type="text" onChange={this.usernameChangeHandler} placeholder="Enter a username..." required />
					</div>
				<input type="submit" value="Submit" />
				</form>
				<ChatRoom />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))