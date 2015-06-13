
Router.configure({
	layoutTemplate: 'layout',
});

/***    Client Side Route Begin    ***/
Router.route('/', 'home');
Router.route('/dashboard', {
	name: 'dashboard',
});
Router.route('/resources', {
	name: 'resources',
});
Router.route('/help', {
	name: 'help',
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
/***    Client Side Route End    ***/

/***    Server Side Route Begin    ***/
// Router.route('/restful2', {where: 'server'})
// .get(function () {
// 	console.log("restful: client or server?" + MM.sname);
// 	this.response.end('get request\n');
// })
// .post(function () {
// 	this.response.end('post request\n');
// });
/***    Server Side Route End    ***/