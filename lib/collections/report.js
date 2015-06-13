UserReport = new Mongo.Collection('UserReport');

ReportUtil = {
	generateReport: function() {
		// get user setting
		var us = UserSetting.findOne();
		console.log("userId" + us.userId);
		
		// remove previous report
		UserReport.remove(); 

		
		// analyze by course
		console.log("us.course.length: " + us.course.length);
		for(var i = 0; i < us.course.length; i++) {
			var course = us.course[i];
			var ur = {"userId": us.userId, "course": course};
			var rightCount = UserQuestion.find({"userId": us.userId, "status": "1", "course": course}).fetch().length;
			var wrongCount = UserQuestion.find({"userId": us.userId, "status": "2", "course": course}).fetch().length;
			console.log("rightCount: " + rightCount);
			ur.rate = rightCount / (rightCount + wrongCount);
			ur.level = ReportUtil.getLevelByRate(ur.rate);
			UserReport.insert(ur);
		}
		
		// // analyze by tag
		// for(var i = 0; i < us.tag.length; i++) {
		// 	var tag = us.tag[i];
		// 	var ur = {"tag": tag};
		// 	var rightCount = UserQuestion.find({"status": "1", "tag": {$all: [tag]} }).fetch().length;
		// 	var wrongCount = UserQuestion.find({"status": "2", "tag": {$all: [tag]} }).fetch().length;
		// 	ur.rate = rightCount / (rightCount + wrongCount);
		// 	ur.level = ReportUtil.getLevelByRate(ur.rate);
		// 	UserReport.upsert(ur, ur);
		// }

		// // analyze by atag
		// for(var i = 0; i < us.atag.length; i++) {
		// 	var tag = us.atag[i];
		// 	var ur = {"atag": tag};
		// 	var rightCount = UserQuestion.find({"status": "1", "atag": {$all: [tag]} }).fetch().length;
		// 	var wrongCount = UserQuestion.find({"status": "2", "atag": {$all: [tag]} }).fetch().length;
		// 	ur.rate = rightCount / (rightCount + wrongCount);
		// 	ur.level = ReportUtil.getLevelByRate(ur.rate);
		// 	UserReport.upsert(ur, ur);
		// }

		// return UserReport.find();
		return 'reporting';
	},
	getLevelByRate: function(rate) {
		var level = '';
		if(rate <= 0.3) {
			level = 'Entry'; 
		} else if(rate <= 0.6) {
			level = 'Medium'; 
		} else if(rate <= 0.8) {
			level = 'Senior'; 
		} else if(rate <= 0.9) {
			level = 'Excellent'; 
		} else {
			level = 'Geek';
		}
		return level;
	},
};