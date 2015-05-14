Meteor.publish('questions', function() {
  return Questions.find({"_id": this.userId});
});
