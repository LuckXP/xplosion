var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./navbar');
var ButtonBar = require('./button-bar');
var Notifier = require('./notifier');
var UserAuth = require('./userAuth')
var Home = require('./home');
var OurProducts = require('./our-products');
var AboutUs = require('./about-us');
var WhereToBuy = require('./where-to-buy');
var ContactUs = require('./contact-us');
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
        <Notifier>
          <UserAuth>  
            <div>
              <ButtonBar setActiveComponent={ this.setActiveComponent } getActiveComponent= { this.getActiveComponent } />
              {this.showWhichComponent()}
            </div>
          </UserAuth> 
        </Notifier> 
      </div>
      )
  }
})

ReactDOM.render(
  <App />, document.getElementById('app')
);