const { Link } = ReactRouter;
App = React.createClass({
  render(){
    return (
      <div className="app-wrap">
        <NavBar />
        { this.props.children }
        <Footer />
      </div>
    );
  }
});