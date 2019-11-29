
var app = angular.module("myApp" , []) ;

app.controller('salesOrderControl' , function($scope , $http){
    $scope.role = 'sales';

    $http.get('new.json')
    .then(function(response){
        if(response && response.data)
            $scope.sales = response.data;
    })

}) ;