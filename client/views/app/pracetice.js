Template.practice.helpers({
	userQuestion: function() {
		return UserQuestions.findOne({'status': '0'});
	},
});

Template.practice.events({
	'submit form': function(e, template) {
		var userQuestId = $('#userQuestId').val();
		var checkedLabel = $('input[name="questAnswer"]:checked').val();
		var anws = $('#anws').val();
		QuestionUtil.submitQuestionAnswer(userQuestId, checkedLabel, anws);
	},
});

Template.single.helpers({
	findQuestionById: function(questId) {
		return QuestionUtil.findQuestionById(questId);
	}
});