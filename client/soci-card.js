var React = require('react');

var SociCard = React.createClass({
    render: function() {
        return (
            <div className="card my-card">
						  <div className="card-header side-card-header">
						    follow us
						  </div>
						  <div className="card-block row">
						  	<a href="#" class="btn btn-primary">Facebook</a>
						  	<a href="#" class="btn btn-primary">Twitter</a>
								<a href="#" class="btn btn-primary">Google +</a>
						  </div>
						</div>
            )
    }

});

module.exports = SociCard;
