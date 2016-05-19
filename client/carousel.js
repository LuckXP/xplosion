var React = require('react');

var Carousel = React.createClass({
    render: function() {
        return (
          <div className="col-sm-8 p-l-0 m-b-1">  
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
						  <ol className="carousel-indicators">
						    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
						    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
						    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
						  </ol>
						  <div className="carousel-inner" role="listbox">
						    <div className="carousel-item active">
						      <img data-src="..." alt="First slide" />
						    </div>
						    <div className="carousel-item">
						      <img data-src="..." alt="Second slide" />
						    </div>
						    <div className="carousel-item">
						      <img data-src="..." alt="Third slide" />
						    </div>
						  </div>
						  <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
						    <span className="icon-prev" aria-hidden="true"></span>
						    <span className="sr-only">Previous</span>
						  </a>
						  <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
						    <span className="icon-next" aria-hidden="true"></span>
						    <span className="sr-only">Next</span>
						  </a>
						</div>
					</div>
        )
    }

});

module.exports = Carousel;