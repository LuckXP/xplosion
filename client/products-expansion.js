var React = require('react');

var ProductsExpansionCard = React.createClass({
    render: function() {
        return (
          <div className="col-sm-8 p-l-0 m-b-1">  
            <div className="card"> 
							  <div className="card-header">
							    <row>
							    	<div>
							    		featured
							    	</div>
							    	<div>
							    		featured
							    	</div>
							    </row>
							  </div>
						  <div className="card-block">
						    <h4 className="card-title">Special title treatment</h4>
						    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
						    <a href="#" className="btn btn-primary">Go somewhere</a>
						  </div>
						</div>
					</div>
          )
    }

});

module.exports = ProductsExpansionCard;