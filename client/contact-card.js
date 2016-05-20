var React = require('react');

var ContactCard = React.createClass({
    render: function() {
        return (
            <div className="card my-card">
						  <div className="card-header side-card-header">
						    where you find us
						  </div>
						  <div className="card-block">
						    <h4 className="card-title">Card title</h4>
						    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
						  </div>
						</div>
            )
    }

});

module.exports = ContactCard;
