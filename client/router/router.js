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

  this.route('FlexWrap', {
    path: '/flex-wrap',
    template: 'Flex'
  });

  this.route('cssTransition', {
    path: '/CSS-transitions',
    template: 'CSS'
  });

  this.route('LESSlessons', {
    path:'/LESS-lessons',
    template: 'LESS'
  })
 


});



