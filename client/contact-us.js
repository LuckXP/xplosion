var React = require('react');

var ContactUs = React.createClass({
    render: function() {
        return (
						<div className="jumbotron my-jumbotron">
						  <h1 className="display-3">Contact Us</h1>
						  <p className="lead">Need to get a hold of us?</p>
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

module.exports = ContactUs;