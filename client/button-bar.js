var React = require('react');

var links = ['home', 'blog', 'our products', 'about us', 'where to buy', 'contact us']

var ButtonBar = React.createClass({
    render: function() {
    	var self = this;
    	var currentComponent = self.props.getActiveComponent;
    	console.log(currentComponent());
    	var linkList =
	      links.map(function(aLink) {
	        if(currentComponent() === aLink) {
	          return (
	          	<button type="button" className="btn btn-secondary button-bar-active" onClick={ self.props.setActiveComponent.bind(null, aLink)}>{aLink}</button>
	            )
	        } else {
	          return (
	            <button type="button" className="btn btn-secondary button-bar-inactive" onClick={ self.props.setActiveComponent.bind(null, aLink)}>{aLink}</button>
	            )
	        }
	      });

      return (
          <div className="btn-group button-bar" role="group" aria-label="Basic example">
					  {linkList}
					</div>
          )
    }

});

module.exports = ButtonBar;