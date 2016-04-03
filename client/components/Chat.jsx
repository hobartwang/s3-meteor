Chat = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		Meteor.subscribe("userData");
		Meteor.subscribe("messages");
		return {
			currentUser: Meteor.user(),
			messages: Messages.find({},{sort:{createAt:1}}).fetch()
		}
	},
  render() {
    return (
      <div className="chat-room">
      	<MessageList messages={this.data.messages} />
        <MessageForm currentUser={this.data.currentUser} />
      </div>
    );
  }
});