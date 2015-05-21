Template.practice.helpers({
	userQuestion: function() {
		return UserQuestions.findOne();
	},
});

Template.practice.events({
	'submit form': function(e, template) {
		var userQuestId = $('#userQuestId').val();
		var checked = $('input[name="questAnswer"]:checked').val();
		QuestionUtil.submitQuestionAnswer(userQuestId, checked);
	},
});

Template.single.helpers({
	findQuestionById: function(questId) {
		return QuestionUtil.findQuestionById(questId);
	}
});