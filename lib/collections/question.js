UserQuestion = new Mongo.Collection('UserQuestion');
Question = new Mongo.Collection('Question');

QuestionUtil = {
	findQuestionById: function(questId) {
		return Question.findOne({'_id': questId});
	},
	submitQuestionAnswer: function(userQuestId, checkedLabel, anws) {
		// 0: default, 1: correct, 2: incorrect
		// console.log('checkedLabel: ' + checkedLabel);
		// console.log('anws: ' + anws);
		var status = (checkedLabel === anws) ? '1' : '2';
		UserQuestion.update({'_id': userQuestId}, {"$set":{"status": status, 'checkedLabel': checkedLabel}});
	},
};