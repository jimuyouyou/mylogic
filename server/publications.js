Meteor.publish('myQuestions', function() {
  var quests = UserQuestions.find({"_id": this.userId});
  var qa = quests.fetch();
  // 0 records, then insert
  if(qa == undefined || qa.length == 0) {
  	var qs = Questions.find().fetch();
	if(qs.length > 0) {
		var uq = {};
		uq.userId = this.userId;
		uq.status ='0';
		for(var i = 0; i < qs.length; i++) {
			var q = qs[i];
			uq.questId = q._id;
			uq.tag = q.quest.tag;
			uq.atag = q.quest.atag;
			var str = JSON.stringify(uq);
			UserQuestions.upsert(uq, uq);
		} // for
	
	// query again after insertion
	quests = UserQuestions.find({"_id": this.userId});
	} // if-qs
  } // if-qa
  return quests;
});

