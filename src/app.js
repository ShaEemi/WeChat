import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ChatRoom from './components/ChatRoom'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { username: '' };

		this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
		this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
	}
	usernameChangeHandler(event) {
		this.setState({ username: event.target.value });
	}

	usernameSubmitHandler(event) {
		event.preventDefault();
		this.setState({ submitted: true, username: this.state.username });
	}

  	render() {
		if (this.state.submitted) {
		  // Form was submitted, now show the main App
		  return (
			<ChatRoom username={this.state.username} />
		  );
		}

		return (
		  <form onSubmit={this.usernameSubmitHandler} className="username-container">
			<h1>Rejoindre une ChatRoom</h1>
			<div>
			  <input
				type="text"
				onChange={this.usernameChangeHandler}
				placeholder="Pseudo..."
				required />
			</div>
			<input type="submit" value="Submit" />
		  </form>
		);
  	}
}

App.defaultProps = {
};

ReactDOM.render(<App />, document.getElementById('app'))