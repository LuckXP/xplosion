var React = require('react');

var WhereToBuy = React.createClass({
    render: function() {
        return (	
					<div className="jumbotron">
					  <h1 className="display-3"> Where to Buy</h1>
					  <p className="lead">Looking for our awsome drinks? Hopefully we can help you out!</p>
					  <hr className="m-y-2" />
					  <p>You can find all flavors of our soda at most major grocery stores and gas stations. </p>
					</div>
        )
    }

});

module.exports = WhereToBuy;