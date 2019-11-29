
var app = angular.module("myApp" , []) ;

app.controller('salesOrderControl' , function($scope , $http){
    $scope.role = 'sales';

    $http.get('new.json')
    .then(function(response){
        if(response && response.data)
            $scope.sales = response.data;
    })

   

    $scope.totalSum = function() { 
        $sum = 0
        jQuery(".total_cost").each(function() {
            $sum += Number(this.innerHTML); 
        });
        return $sum;

      };  

}) ;

