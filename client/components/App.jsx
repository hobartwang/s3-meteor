const { AppBar } = mui;
App = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			currentUser: Meteor.user()
		}
	},
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  componentWillMount() {
    let setNavBarState = function(){
      this.setState({renderNavBar: document.body.clientWidth > 700});
    }.bind(this);
    setNavBarState();
    window.onresize = setNavBarState;
  },
  render(){
    return (
      <div className="app-wrap">
        { this.state.renderNavBar ? <NavBar currentUser={this.data.currentUser}/> :
          this.data.currentUser ? this._getLoginAppBar() : this._getAppBar()
        }
        <AppLeftNav ref="leftNav" currentUser={this.data.currentUser} />
        { this.props.children }
        <Footer />
      </div>
    );
  },
  _getAppBar() {
    return (
      <AppBar title={this._getAppBarTitle()}
        onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
      />
    );
  },
  _getLoginAppBar() {
    return (
      <AppBar title={this._getAppBarTitle()}
        onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
        iconStyleRight={{marginTop:0}}
        iconElementRight={<LogOutMenu currentUser={this.data.currentUser} /> }
      />
    );
  },
  _getAppBarTitle() {
    return title = this.context.router.isActive('/home') ? 'Home' :
      this.context.router.isActive('/signup') ? 'Sign Up' :
      this.context.router.isActive('/login') ? 'Log In' :
      this.context.router.isActive('/account') ? 'Account' :
      this.context.router.isActive('/chat') ? 'Chat' : '';
  },
  _onLeftIconButtonTouchTap() {
    this.refs.leftNav.handleToggle();
  }


});