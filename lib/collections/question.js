UserQuestion = new Mongo.Collection('UserQuestion');
Question = new Mongo.Collection('Question');

QuestionUtil = {
	findQuestionById: function(questId) {
		return Question.findOne({'_id': questId});
	},
	submitQuestionAnswer: function(userQuestId, checkedLabel, ans) {
		// 0: default, 1: correct, 2: incorrect
		// console.log('checkedLabel: ' + checkedLabel);
		// console.log('ans: ' + ans);
		var status = (checkedLabel === ans) ? '1' : '2';
		UserQuestion.update({'_id': userQuestId}, {"$set":{"status": status, 'checkedLabel': checkedLabel}});
	},
	getATags: function(quest) {
		var aTags = [];
		var as = quest.choices;
		for(var i = 0; i < as.length; i++) {
			aTags = _.union(aTags, as[i].tag);
		}
		return aTags;
	},
};