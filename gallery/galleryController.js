angular.module('routesApp')

.controller('galleryCtrl', ['$scope', '$state', function($scope, $state) {

  $scope.changeState = function(stateName) {
    $state.go(stateName);
  };

}]);

