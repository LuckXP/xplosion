var React = require('react');

var RandomCard = React.createClass({
    render: function() {
        return (
            <div className="card my-card">
						  <div className="card-header side-card-header">
						    randomly selected
						  </div>
						  <div className="card-block">
						    <ul className="card-text">
						    	<li>X-Plosion is a hit in Japan</li>
						    	<li>3 new flavors added</li>
						    	<li>Check out our new promo on YouTube</li>
						    	<li> We say NP to artifical flavors</li>
						    	<li>X-plosion and your health</li>
						    </ul>
						  </div>
						</div>
            )
    }

});

module.exports = RandomCard;
