Chat = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		Meteor.subscribe("userData");
		return {
			currentUser: Meteor.user()
		}
	},
  render() {
    return (
      <div className="chat-room">
        <MessageForm currentUser={this.data.currentUser} />
      </div>
    );
  }
});