Template.report.helpers({
	generateReport: function() {
		$.get('/generateReport', 
			{}, 
			function(data) { 
				// alert("data: " + data);
			} 
			); 
	}
});

Template.courseReport.helpers({
	getCourseReport: function() {
		// return UserReport.find({"userId": CurrentUser.userId, "rtype": "course"}); //, {"userId": CurrentUser.userId}"rtype": "course"
		return ReportUtil.getCourseReport();
	}
});

Template.tagReport.helpers({
	getTagReport: function() {
		return ReportUtil.getTagReport();	
	}
});

Template.atagReport.helpers({
	getATagReport: function() {
		return ReportUtil.getATagReport();	
	}
});