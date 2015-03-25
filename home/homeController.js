angular.module('routesApp')

.controller('homeCtrl', ['$scope', '$state',  function($scope, $state) {

  $scope.changeState = function(stateName) {
    $state.go(stateName);
  };

}]);
