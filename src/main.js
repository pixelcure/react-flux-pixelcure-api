$ = jQuery = require('jquery');

var React = require('react');
var Home = require('./components/homePage');
var Header = require('./components/common/header');
var Taglines = require('./components/taglines/taglinesPage');
var About = require('./components/about/aboutPage');

$(function(window){
	"use strict";

	var App = React.createClass({
		render : function () {
			var Child;

			switch(this.props.route) {
				case 'about' : Child = About; break;
				case 'taglines' : Child = Taglines; break;
				default: Child = Home;
			}

			return (
				<main>
				<Header />
				 <Child />
				</main>
			);
		}
	});

	function render () {
		var route = window.location.hash.substr(1);
		React.render(<App route={route} />, document.getElementById('app'))
	}

	window.addEventListener('hashchange', render);

	render();

}(window))
