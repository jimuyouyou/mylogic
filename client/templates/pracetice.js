Template.practice.helpers({
	userQuestion: function() {
		return UserQuestion.findOne({'status': '0'});
	},
});

Template.practice.events({
	'submit form': function(e, template) {
		var userQuestId = $('#userQuestId').val();
		var checkedLabel = $('input[name="questAnswer"]:checked').val();
		var ans = $('#ans').val();
		QuestionUtil.submitQuestionAnswer(userQuestId, checkedLabel, ans);
	},
});

Template.single.helpers({
	findQuestionById: function(questId) {
		return QuestionUtil.findQuestionById(questId);
	}
});