import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ChatRoom from './components/ChatRoom'

class App extends Component {
	render(){
		return(
			<div>
				<h1> Hello WeChat </h1>
				<ChatRoom />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))