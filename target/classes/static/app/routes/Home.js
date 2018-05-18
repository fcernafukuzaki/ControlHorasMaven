import React from 'react';

export default class Home extends React.Component {

	constructor() {
		super()
	}
	
	render() {
		if(!this.state) {
		   return <div>loading ...</div>;
		}
		else {
		return (
			<div>
				<h1>Hola</h1>
				
			</div>
		);
		}
	}

}