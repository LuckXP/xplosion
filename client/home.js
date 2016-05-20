var React = require('react');

var Home = React.createClass({
    render: function() {
        return (
					<div className="jumbotron my-jumbotron">
					  <div className="col-xs-8">
						  <h1 className="display-3">X-Plosion</h1>
						  <p className="lead">Try a healthy alternative to the current artificial drinks - your mind, body and tounge will thank you!</p>
						  <hr className="m-y-2" />
						  <p>Hammock art party umami affogato, messenger bag sustainable tilde taxidermy pork belly. Bushwick single-origin coffee bicycle rights banh mi yuccie. Butcher dreamcatcher tilde, irony next level microdosing small batch banjo fingerstache paleo lumbersexual listicle echo park. PBR&B VHS organic deep v viral bicycle rights. Jean shorts retro chillwave cronut offal occupy, letterpress pop-up organic banh mi raw denim mixtape butcher blog. Tumblr asymmetrical vegan, synth wayfarers distillery vinyl tousled 3 wolf moon ennui single-origin coffee butcher. Normcore health goth flexitarian, letterpress ennui williamsburg selfies bitters everyday carry banh mi.
						  </p>
						  <p className="lead">
						    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
					  	</p>
					  </div>
					  <div className="col-xs-4">
					  	<img src="https://www.danielbranch.com/slimsejuice/image/cache/catalog/drinks/grape-soda-e-juice-e-liquid-for-vaping-230-500x500.png" />
					  </div>
					</div>
        )
    }

});

module.exports = Home;