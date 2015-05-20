
Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', 'home');
Router.route('/dashboard', {
	name: 'dashboard',
	// waitOn: function() { 
	// 	return Meteor.subscribe('questions');
	// },
});

Router.route('/addQuestion', 'addQuestion');
Router.route('/practice', {
	name: 'practice',
	waitOn: function() { 
		return Meteor.subscribe('userQuestions');
	},
});
