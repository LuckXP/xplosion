var React = require('react');

var OurProducts = React.createClass({
    render: function() {
        return (
					<div className="jumbotron my-jumbotron">
					  <h1 className="display-3">Our Produts</h1>
					  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
					  <hr className="m-y-2" />
					  <p>Bacon ipsum dolor amet sausage tri-tip sirloin meatloaf, bresaola spare ribs swine chuck biltong. Ball tip ham tail frankfurter bresaola swine pancetta short loin t-bone. Prosciutto pancetta ribeye brisket, sausage swine turducken porchetta ball tip corned beef flank landjaeger salami kevin jerky. Sirloin turkey t-bone venison. Filet mignon ground round brisket jowl bresaola turducken pork chop capicola kevin pastrami prosciutto pig.
						</p>
						<p className="lead">
					    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
					  </p>
					</div>
        )
    }

});

module.exports = OurProducts;