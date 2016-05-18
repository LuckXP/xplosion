var React = require('react');

var Footer = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-fixed-bottom footer">
						  <a className="navbar-brand" href="#">Fixed bottom</a>
						</nav>
            )
    }

});

module.exports = Footer;