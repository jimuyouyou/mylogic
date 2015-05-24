
Router.configure({
	layoutTemplate: 'layout',
	waitOn: function() { 
		return Meteor.subscribe('question');
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
		return Meteor.subscribe('userQuestion');
	},
});

Router.route('/report', {
	name: 'report',
	waitOn: function() { 
		return Meteor.subscribe('userReport');
	},
});
