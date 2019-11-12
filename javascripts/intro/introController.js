app.controller('IntroController', ['$scope', function($scope) {
    var current_date = new Date();
    var deadline = new Date("12/09/2019");
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds    
    var days_left = Math.round(Math.abs((current_date.getTime() - deadline.getTime())/(oneDay)));
    $scope.days_left = days_left + " days left";
    
}]);
  