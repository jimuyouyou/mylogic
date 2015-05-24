UserQuestions = new Mongo.Collection('UserQuestions');
Questions = new Mongo.Collection('Questions');

QuestionUtil = {
	findQuestionById: function(questId) {
		return Questions.findOne({'_id': questId});
	},
	submitQuestionAnswer: function(userQuestId, checkedLabel, anws) {
		// 0: default, 1: correct, 2: incorrect
		// console.log('checkedLabel: ' + checkedLabel);
		// console.log('anws: ' + anws);
		var status = (checkedLabel === anws) ? '1' : '2';
		UserQuestions.update({'_id': userQuestId}, {"$set":{"status": status}});
	},
};