var React = require('react');

var SociCard = React.createClass({
    render: function() {
        return (
            <div className="card col-sm-4">
						  <img className="card-img-top" data-src="..." alt="Card image cap" />
						  <div className="card-block">
						    <h4 className="card-title">Card title</h4>
						    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
						  </div>
						</div>
            )
    }

});

module.exports = SociCard;