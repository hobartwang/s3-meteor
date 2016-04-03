const {
  RaisedButton,
  FlatButton,
  TextField,
  Card
} = mui;

Account = React.createClass({
  getInitialState() {
    return {
      user: {},
    };
  },
  
  _handleSubmit(e) {
    e.preventDefault();
    const username = this.refs.username.getValue();
    const url = `https://api.github.com/users/${username}`;

    HTTP.call('get',url,(error,res) => {
      if(error) {
        console.log(error);
      } else {
        this.setState({user: JSON.parse(res.content)})
      }
    });
  },

  render() {
    let GitHubInfo;
    if(!_.isEmpty(this.state.user)) {
      GitHubInfo = (
        <div>
          <UserInfo userInfo={this.state.user} />
          <RaisedButton
            style={{display:'block',margin:'30px auto 0',width:'180px'}}
            primary={true}
            label="save"
            onClick={this._handleClick} 
          />
        </div>
      );
    }
    return (
      <div className='account'>
        <Card className='content'>
          <form onSubmit={this._handleSubmit}>
            <TextField
              hintText="Github Account"
              ref='username'/>

            <FlatButton
              type="submit"
              primary={true}
              label="search github" />
          </form>
          { GitHubInfo }
        </Card>
      </div>
    );
  }
});