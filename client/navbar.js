var React = require('react');

var NavBar = React.createClass({
  contextTypes: {
    user: React.PropTypes.object
  },
  render: function() {
    return (
      <nav className="navbar my-nav">
        <a className="navbar-brand" href="#">X-PLOSION</a>
        
        <form className="form-inline pull-xs-right">
          <input className="form-control my-search" type="text" placeholder="Search X-Plosion" />
          <button className="btn search-button" type="submit">search</button>
        </form>
      </nav>
    )
  }

});

module.exports = NavBar;