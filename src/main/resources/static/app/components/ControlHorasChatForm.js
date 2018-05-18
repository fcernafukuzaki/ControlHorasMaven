import React from 'react';
import ReactDOM from 'react-dom';


var usernamePage = document.querySelector('#username-page');
var chatPage = document.querySelector('#chat-page');
//var usernameForm = document.querySelector('#usernameForm');
//var messageForm = document.querySelector('#messageForm');
//var messageInput = document.querySelector('#message');
var messageInput = null;
//var messageArea = document.querySelector('#messageArea');
var messageArea = null;
var connectingElement = document.querySelector('.connecting');

var stompClient = null;
var username = null;


function onMessageReceivedPrivate(payload) {
	console.log("Mensaje privado: " + payload.body);
}

function onMessageReceived(payload) {
	if(JSON.parse(payload.body).sender === username){
	    var message = JSON.parse(payload.body);
	
	    var messageElement = document.createElement('li');
	
	    if(message.type === 'JOIN') {
	        messageElement.classList.add('event-message');
	        message.content = message.sender + ' joined!';
	    } else if (message.type === 'LEAVE') {
	        messageElement.classList.add('event-message');
	        message.content = message.sender + ' left!';
	    } else {
	        messageElement.classList.add('chat-message');
	
	        var avatarElement = document.createElement('i');
	        var avatarText = document.createTextNode(message.sender[0]);
	        avatarElement.appendChild(avatarText);
	        //avatarElement.style['background-color'] = getAvatarColor(message.sender);
	
	        messageElement.appendChild(avatarElement);
	
	        var usernameElement = document.createElement('span');
	        var usernameText = document.createTextNode(message.sender);
	        usernameElement.appendChild(usernameText);
	        messageElement.appendChild(usernameElement);
	    }
	
	    var textElement = document.createElement('p');
	    var messageText = document.createTextNode(message.content);
	    textElement.appendChild(messageText);
	
	    messageElement.appendChild(textElement);
	
	    messageArea.appendChild(messageElement);
	    messageArea.scrollTop = messageArea.scrollHeight;
    }
}



class ControlHorasChatForm extends React.Component {
	onConnected() {
	    // Subscribe to the Public Topic
	    //stompClient.subscribe('/topic/public', onMessageReceived);
	    //stompClient.subscribe('/topic/private', onMessageReceivedPrivate);
	    stompClient.subscribe('/topic/private', onMessageReceived);
	    // Tell your username to the server
	    stompClient.send("/app/chat.addUser",
	        {},
	        JSON.stringify({sender: username, type: 'JOIN'})
	    )
	
	    //this.connectingElement.classList.add('hidden');
	}
	onError(error) {
	    //connectingElement.textContent = 'Could not connect to WebSocket server. Please refresh this page to try again!';
	    //connectingElement.style.color = 'red';
	    console.log("Could not connect to WebSocket server. Please refresh this page to try again!");
	}
	sendMessage(event) {
		messageInput = this.refs.message.value;
		
	    var messageContent = messageInput;
	    if(messageContent && stompClient) {
	        var chatMessage = {
	            sender: username,
	            content: messageInput,
	            type: 'CHAT'
	        };
	        //stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(chatMessage));
	        stompClient.send("/app/chatAdmin.sendMessage", {}, JSON.stringify(chatMessage));
	        messageInput = '';
	        this.refs.message.value = ''; 
	    }
	    event.preventDefault();
	}
	connect() {
		
		//username = document.querySelector('#name').value.trim();
	    username = this.refs.name.value;
	    messageArea = this.refs.messageArea;
	
	    //if(username) {
	        //usernamePage.classList.add('hidden');
	        //chatPage.classList.remove('hidden');
	
	        var socket = new SockJS('/ControlHoras/ws');
	        stompClient = Stomp.over(socket);
	        stompClient.connect({}, this.onConnected, this.onError);
	    //}
	    
	    //event.preventDefault();
	}
	
	handleSubmit(e){
		console.log("submit");
		this.connect();
		
		e.preventDefault();
	}

    render() {
        return (
			<div>
				
				<div id="username-page">
			        <div className="username-page-container">
			            <h1 className="title">Type your username</h1>
			            <form id="usernameForm" onSubmit={this.handleSubmit.bind(this)}>
			                <div className="form-group">
			                    <input type="text" ref="name" className="form-control" />
			                </div>
			                <div className="form-group">
			                    <button type="submit" className="accent username-submit">Start Chatting</button>
			                    <input type="submit" className="accent username-submit" value="Start Chatting" />
			                </div>
			            </form>
			        </div>
			    </div>
			    
			    <div id="chat-page" >
			        <div className="chat-container">
			            <div className="chat-header">
			                <h2>Spring WebSocket Chat Demo</h2>
			            </div>
			            <div className="connecting">
			                Connecting...
			            </div>
			            <ul ref="messageArea">
							
			            </ul>
			            <form id="messageForm" name="messageForm"  onSubmit={this.sendMessage.bind(this)}>
			                <div className="form-group">
			                    <div className="input-group clearfix">
			                        <input type="text" ref="message" placeholder="Type a message..." className="form-control"/>
			                        <button type="submit" className="primary">Send</button>
			                        <input type="submit" className="primary" value="Send"/>
			                    </div>
			                </div>
			            </form>
			        </div>
			    </div>
		    	
		    </div>
		);
    }
}


export default ControlHorasChatForm;