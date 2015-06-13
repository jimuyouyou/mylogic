Meteor.publish('userQuestion', function() {
	var quests = UserQuestion.find({"userId": this.userId});
	var qa = quests.fetch();
	
	// 0 records, then insert
	if(qa == undefined || qa.length == 0) {
		var qs = Question.find().fetch();
		if(qs.length > 0) {
			var uq = {};
			uq.userId = this.userId;
			uq.status ='0';
			for(var i = 0; i < qs.length; i++) {
				var q = qs[i];
				uq.questId = q._id;
				uq.tag = q.quest.tag;
				uq.atag = q.quest.atag;
				UserQuestion.upsert(uq, uq);
			} // for

			// query again after insertion
			quests = UserQuestion.find({"userId": this.userId});
		} // if-qs
	} // if-qa

	return quests;
});

Meteor.publish('question', function() {
	return Question.find();
});

Meteor.publish('userReport', function() {
	return UserReport.find({"userId": this.userId});
});

