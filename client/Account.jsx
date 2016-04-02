const {
  RaisedButton,
  FlatButton,
  TextField,
  Card
} = mui;

Account = React.createClass({
  render() {
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
        </Card>
      </div>
    );
  }
});