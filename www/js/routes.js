angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page12', {
    url: '/page12',
    templateUrl: 'templates/page12.html',
    controller: 'page12Ctrl'
  })

  .state('page28', {
    url: '/page28',
    templateUrl: 'templates/page28.html',
    controller: 'page28Ctrl'
  })

  .state('page29', {
    url: '/page29',
    templateUrl: 'templates/page29.html',
    controller: 'page29Ctrl'
  })

  .state('page13', {
    url: '/page13',
    templateUrl: 'templates/page13.html',
    controller: 'page13Ctrl'
  })

  .state('page2', {
    url: '/page2',
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

  .state('page21', {
    url: '/page21',
    templateUrl: 'templates/page21.html',
    controller: 'page21Ctrl'
  })

  .state('page6', {
    url: '/page6',
    templateUrl: 'templates/page6.html',
    controller: 'page6Ctrl'
  })

  .state('page7', {
    url: '/page7',
    templateUrl: 'templates/page7.html',
    controller: 'page7Ctrl'
  })

  .state('page9', {
    url: '/page9',
    templateUrl: 'templates/page9.html',
    controller: 'page9Ctrl'
  })

  .state('page10', {
    url: '/page10',
    templateUrl: 'templates/page10.html',
    controller: 'page10Ctrl'
  })

  .state('page23', {
    url: '/page23',
    templateUrl: 'templates/page23.html',
    controller: 'page23Ctrl'
  })

  .state('page14', {
    url: '/page14',
    templateUrl: 'templates/page14.html',
    controller: 'page14Ctrl'
  })

  .state('page15', {
    url: '/page15',
    templateUrl: 'templates/page15.html',
    controller: 'page15Ctrl'
  })

  .state('page16', {
    url: '/page16',
    templateUrl: 'templates/page16.html',
    controller: 'page16Ctrl'
  })

  .state('page17', {
    url: '/page17',
    templateUrl: 'templates/page17.html',
    controller: 'page17Ctrl'
  })

  .state('page24', {
    url: '/page24',
    templateUrl: 'templates/page24.html',
    controller: 'page24Ctrl'
  })

  .state('page30', {
    url: '/page30',
    templateUrl: 'templates/page30.html',
    controller: 'page30Ctrl'
  })

  .state('page31', {
    url: '/page31',
    templateUrl: 'templates/page31.html',
    controller: 'page31Ctrl'
  })

  .state('1', {
    url: '/page18',
    templateUrl: 'templates/1.html',
    controller: '1Ctrl'
  })

  .state('12', {
    url: '/page25',
    templateUrl: 'templates/12.html',
    controller: '12Ctrl'
  })

  .state('2', {
    url: '/page19',
    templateUrl: 'templates/2.html',
    controller: '2Ctrl'
  })

  .state('22', {
    url: '/page26',
    templateUrl: 'templates/22.html',
    controller: '22Ctrl'
  })

  .state('3', {
    url: '/page20',
    templateUrl: 'templates/3.html',
    controller: '3Ctrl'
  })

  .state('32', {
    url: '/page27',
    templateUrl: 'templates/32.html',
    controller: '32Ctrl'
  })

  .state('page22', {
    url: '/page22',
    templateUrl: 'templates/page22.html',
    controller: 'page22Ctrl'
  })

  .state('page11', {
    url: '/page11',
    templateUrl: 'templates/page11.html',
    controller: 'page11Ctrl'
  })

$urlRouterProvider.otherwise('/page12')


});