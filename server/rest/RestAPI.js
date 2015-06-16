RestAPI = {
	generateReport: function() {
		// get user setting
		var us = UserSetting.findOne({"userId": CurrentUser.userId});
		// console.log("userId:" + us.userId);
		
		// remove previous report
		UserReport.remove({"userId": us.userId}); 

		
		// analyze by course
		// console.log("us.course.length: " + us.course.length);
		var ur = {"userId": us.userId};
		ur.rtype = "course";
		for(var i = 0; i < us.course.length; i++) {
			var course = us.course[i];
			ur.rvalue = course;
			var rightCount = UserQuestion.find({"userId": us.userId, "status": "1", "course": course}).fetch().length;
			var wrongCount = UserQuestion.find({"userId": us.userId, "status": "2", "course": course}).fetch().length;
			// console.log("rightCount: " + rightCount);
			ur.rate = rightCount / (rightCount + wrongCount);
			ur.level = ReportUtil.getLevelByRate(ur.rate);
			UserReport.insert(ur);
		}
		
		// // analyze by tag
		ur.rtype = "tag";
		for(var i = 0; i < us.tag.length; i++) {
			var tag = us.tag[i];
			ur.rvalue = tag;
			var rightCount = UserQuestion.find({"status": "1", "tag": {$all: [tag]} }).fetch().length;
			var wrongCount = UserQuestion.find({"status": "2", "tag": {$all: [tag]} }).fetch().length;
			ur.rate = rightCount / (rightCount + wrongCount);
			ur.level = ReportUtil.getLevelByRate(ur.rate);
			UserReport.insert(ur);
		}

		// // analyze by atag
		ur.rtype = "atag";
		for(var i = 0; i < us.atag.length; i++) {
			var tag = us.atag[i];
			ur.rvalue = tag;
			var rightCount = UserQuestion.find({"status": "1", "atag": {$all: [tag]} }).fetch().length;
			var wrongCount = UserQuestion.find({"status": "2", "atag": {$all: [tag]} }).fetch().length;
			ur.rate = rightCount / (rightCount + wrongCount);
			ur.level = ReportUtil.getLevelByRate(ur.rate);
			UserReport.insert(ur);
		}
	},
};
