"use strict";

var React = require('react');
var url = 'http://api.pixelcureinteractive.com/?json=1&post_type=heroTagLine';


function getTaglines () {
	var get = new XMLHttpRequest();
	var taglines;	
		
	// open connection, pass url
	get.open('GET', url);
	
	// pull data
	get.send();

	// on load
	get.addEventListener('load', function(){
		taglines = JSON.parse( get.response )
		return taglines.posts;
	});
}


var Taglines = React.createClass({
	
	getInitialState : function() {
		console.info('get initial state');
		return {
			taglines : []
		}
	},

	componentWillMount : function() {
		this.setState({ taglines : getTaglines() });

		console.info('component will mount');
	},

	render : function () {

		return(
			<div>
				<h1>Taglines</h1>

				<table className="table">
					<thead>
						<th>Id</th>
						<th>Author</th>
					</thead>
					<tbody>
						// { this.state.authors.map( createTaglineRow, this ) }
					</tbody>
				</table>
			</div>	
		)
	}

});

module.exports = Taglines;