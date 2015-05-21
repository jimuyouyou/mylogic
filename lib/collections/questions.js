UserQuestions = new Mongo.Collection('UserQuestions');
Questions = new Mongo.Collection('Questions');

QuestionUtil = {
	findQuestionById: function(questId) {
		return Questions.findOne({'_id': questId});
	},
	submitQuestionAnswer: function(userQuestId, questLabel) {
		UserQuestions.update({'_id': userQuestId}, {});
	},
};