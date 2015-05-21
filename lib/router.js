
Router.configure({
	layoutTemplate: 'layout',
	waitOn: function() { 
		return Meteor.subscribe('questions');
	},
});

Router.route('/', 'home');
Router.route('/dashboard', {
	name: 'dashboard',
});

Router.route('/addQuestion', 'addQuestion');
Router.route('/practice', {
	name: 'practice',
	waitOn: function() { 
		return Meteor.subscribe('userQuestions');
	},
});
