UserReport = new Mongo.Collection('UserReport');

ReportUtil = {
	getCourseReport: function() {
		return UserReport.find({"rtype": "course"});
	},
	getTagReport: function() {
		return UserReport.find({"rtype": "tag"});
	},
	getATagReport: function() {
		return UserReport.find({"rtype": "atag"});
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