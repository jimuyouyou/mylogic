
Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', 'home');
Router.route('/dashboard', 'dashboard');
Router.route('/addQuestion', 'addQuestion');
Router.route('/practice', {
  name: 'practice',
  waitOn: function() { 
    return Meteor.subscribe('myQuestions');
  },
  data: function() { return UserQuestions.find(); }
});
