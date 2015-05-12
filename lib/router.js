
Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', 'home');
Router.route('/dashboard', 'dashboard');
Router.route('/addQuestion', 'addQuestion');
