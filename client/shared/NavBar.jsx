const { Tabs, Tab, IconButton } = mui;

NavBar = React.createClass({
  getInitialState() {
    return {
      tabIndex: ''
    };
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentWillMount() {
    this.setState({
      tabIndex: this._getSelectedIndex(),
    });
  },

  componentWillReceiveProps(nextProps) {
    this.setState({
      tabIndex: this._getSelectedIndex(),
    });
  },

  _handleTabsChange(value) {
    this.context.router.push(value)
    this.setState({tabsIndex: this._getSelectedIndex()});
  },

  _getSelectedIndex() {
    return this.context.router.isActive('/home') ? '/home' :
      this.context.router.isActive('/signup') ? '/signup' :
      this.context.router.isActive('/login') ? '/login' : '';
  },

  render() {
    let styles = {
      tabs: {
        width: '390px',
        position: 'absolute',
        right: '60px',
        textTransform: 'uppercase',
      },
      tab: {
        height: '64px',
        color: '#fff',
      },
      inkBar: {
        height: '4px',
        marginTop: '-4px',
      },
    };

    return (
      <div className="app-header">
        <Tabs
          style={styles.tabs}
          tabItemContainerStyle={{backgroundColor: 'transparent'}}
          inkBarStyle={styles.inkBar}
          value={this.state.tabIndex}
          onChange={this._handleTabsChange}>
          <Tab
            label='Home'
            value='/home'
            style={styles.tab} />
          <Tab
            label='sign up'
            value='/signup'
            style={styles.tab} />
          <Tab
            label='log in'
            value='/login'
            style={styles.tab} />
        </Tabs>
      </div>
    );
  }
});