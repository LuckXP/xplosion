var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./navbar');
var ButtonBar = require('./button-bar');
var Home = require('./home');
var OurProducts = require('./our-products');
var AboutUs = require('./about-us');
var WhereToBuy = require('./where-to-buy');
var ContactUs = require('./contact-us');
var RandomCard = require('./random-card');
var ContactCard = require('./contact-card');
var SociCard = require('./soci-card');
var Carousel = require('./carousel');
var ProductsExpansionCard = require('./products-expansion.js');
var Footer = require('./footer.js');


var Blog = require('./blogComp/blog.js');
var BlogList = require('./blogComp/blogList.js');


require('./stylesheets/main.scss');


var App = React.createClass({
  getInitialState: function() {
  	return {
  		activeComponent: 'home'
  	}
  },
  setActiveComponent: function(componentName) {
  	this.setState({
  		activeComponent: componentName
  	})
  },

  getActiveComponent: function() {
    return this.state.activeComponent;
  },

  showWhichComponent: function() {
   switch(this.state.activeComponent) {
    case 'home':
        return <Home />
        break;
    case 'blog':
        return <Blog />
        break;
    case 'our products':
        return <OurProducts />
        break;
    case 'about us':
        return <AboutUs />
        break;
    case 'where to buy':
        return <WhereToBuy />
        break;
    case 'contact us':
        return <ContactUs />
        break;
    default:
       return <Home />
    }
  },
  render: function() {
    return ( 
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <ButtonBar setActiveComponent={ this.setActiveComponent } getActiveComponent= { this.getActiveComponent } />
        </div>
        <div className="container row">
          <div className="column-right">
            <div className="p-r-2 m-b-1">
              {this.showWhichComponent()}
            </div>
            <Carousel />
            <ProductsExpansionCard />
          </div>
          <div className="column-right">
            <SociCard />
            <RandomCard />
            <ContactCard />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
      )
  }
})

ReactDOM.render(
  <App />, document.getElementById('app')
);