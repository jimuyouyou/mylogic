
Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', 'home');
Router.route('/dashboard', 'dashboard');
Router.route('/addQuestion', 'addQuestion');
Router.route('/practice', {
  name: 'practice',
  waitOn: function() { 
    return Meteor.subscribe('questions');
  },
  data: function() { return Questions.find(); }
});
