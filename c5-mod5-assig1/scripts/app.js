(function() {
  angular.module('LunchCheck', [])
    .controller('LunchCheckController', lunchCheckController)

  lunchCheckController.$inject = ['$scope'];

  function lunchCheckController($scope) {
    $scope.lunchList = "";
    $scope.message = { text: '', alert: false };
    $scope.checkList = function() {
      $scope.message.text = "clicked";
      var list = $scope.lunchList.split(',');
      list= list.filter(function (item) {return item != ""});
      $scope.message.alert = false;
      if ($scope.lunchList === ""){
        $scope.message.text = "Please enter data first";
        $scope.message.alert = true;
      } else if (list.length <= 3) {
        $scope.message.text = "Enjoy!";
      } else {
        $scope.message.text = "Too much!";
      }
    }
  };
})();