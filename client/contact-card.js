var React = require('react');

var ContactCard = React.createClass({
    render: function() {
        return (
            <div className="card my-card">
						  <div className="card-header side-card-header">
						    where you can find us
						  </div>
						  <div className="card-block">
						    <h5>X-Plosion Ltd</h5>
						    <p>
						    	9 Danbury Road<br/>
						    	Wilton<br/>
						    	Ct 06897
						    </p>
						  </div>
						</div>
            )
    }

});

module.exports = ContactCard;
