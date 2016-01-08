"use strict";

var React = require('react');

var Header = React.createClass({

	render : function () {
		return(
			<nav className="nav navbar-default">
				<div className="container-fluid">
					<a href="/" className="navbar-brand">
						<img src="images/logo.svg" className="image"/>
					</a>
					<ul className="nav navbar-nav">
						<li><a href="/">Home</a></li>
						<li><a href="/#about">About</a></li>
						<li><a href="/#taglines">Taglines</a></li>
					</ul>
				</div>
			</nav>
		);
	}


});

module.exports = Header;