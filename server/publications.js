Meteor.publish('userQuestion', function() {
	var quests = UserQuestion.find({"userId": this.userId});
	var qa = quests.fetch();
	
	// 0 records, then insert
	if(qa == undefined || qa.length == 0) {
		var us = {userId: this.userId, course:[], tag:[], atag: []};
		var qs = Question.find().fetch();
		if(qs.length > 0) {
			var uq = {userId: this.userId};
			uq.status ='0';
			for(var i = 0; i < qs.length; i++) {
				var q = qs[i];
				uq.questId = q._id;
				uq.course = q.course;
				uq.tag = q.tag;
				uq.ans = q.ans;
				uq.atag = QuestionUtil.getATags(q);
				UserQuestion.upsert(uq, uq);

				// merge course, tag and atag for user setting
				us.course = _.union(us.course, q.course);
				us.tag = _.union(us.tag, uq.tag);
				us.atag = _.union(us.atag, uq.atag);
			} // for

			// update user setting
			UserSetting.upsert(us, us);
			
			// query again after insertion
			quests = UserQuestion.find({"userId": this.userId});
		} // if-qs
	} // if-qa
	
	return quests;
});

Meteor.publish('question', function() {
	return Question.find();
});

Meteor.publish('course', function() {
	return Course.find();
});

Meteor.publish('userSetting', function() {
	CurrentUser.userId = this.userId;
	return UserSetting.find({"userId": this.userId});
});

Meteor.publish('userReport', function() {
	return UserReport.find({"userId": this.userId});
});

