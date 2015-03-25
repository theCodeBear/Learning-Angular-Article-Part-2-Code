angular.module('routesApp', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  })

  .state('gallery', {
    url: '/gallery',
    templateUrl: 'gallery/gallery.html',
    controller: 'galleryCtrl'
  })

  .state('github', {
    url: '/github',
    templateUrl: 'github//github.html',
    controller: 'githubCtrl'
  });

}]);
