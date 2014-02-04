Router.configure({
  layoutTemplate: 'layout',
  yieldTemplates: {
    'myHeader': {to: 'header'},
    'myFooter': {to: 'footer'}
  }
});

Router.map(function () {
  
  this.route('home', {
    path: '/',
    template: 'home'
  });

  this.route('features', {
    path: '/features',
    template: 'features'
  });

  this.route('contact', {
    path: '/contact',
    template: 'contact'
  });

});



