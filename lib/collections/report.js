UserReport = new Mongo.Collection('UserReport');

ReportUtil = {
	generateReport: function() {
		var quests = UserQuestion.find({"status": '2'});
		var qa = quests.fetch();
		var tags = {};
		for(var i = 0; i < qa.length; i++) {
			var uq = qa[i];
			var qs = Question.findOne({'_id': uq.questId}).fetch();
			for(var p = 0; p < qs.anwsers.length; p++){
				uq.checkedLabel = '';
			}
		}
	},
};