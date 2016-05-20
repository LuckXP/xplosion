var React = require('react');

var Carousel = React.createClass({
    render: function() {
        return (
          <div className="p-r-2 m-b-1">  
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
						  <ol className="carousel-indicators">
						    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
						    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
						    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
						  </ol>
						  <div className="carousel-inner" role="listbox">
						    <div className="carousel-item active">
						      <img src="http://thumbs.dreamstime.com/x/explosion-background-17201367.jpg" alt="First slide" />
						    </div>
						    <div className="carousel-item">
						      <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBFj-SifmS-sKlzL9pKRrPPfzSy6ymY_hg3kaSqMCK59wnifBb9w" alt="Second slide" />
						    </div>
						    <div className="carousel-item">
						      <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ8vjiNUPBtqDS0RwY7igBNP26-Z4UY9iQzPFBzCjUJPapStGP8" alt="Third slide" />
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