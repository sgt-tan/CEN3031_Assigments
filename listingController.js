angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.Info = undefined;
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      var newListing = {
        "code": $scope.nCode,
        "name": $scope.nName,
        "coordinates": {
          "latitude": $scope.nLatitude,
          "longitude": $scope.nLongitude
        },
        "address": $scope.nAddress
      };
      $scope.listings.push(newListing);
      $scope.nCode = undefined;
      $scope.nName = undefined;
      $scope.nLatitude = undefined;
      $scope.nLongitude = undefined;
      $scope.nAddress = undefined;
    };

    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);
    };

    $scope.showDetails = function(index) {
      $scope.Info = $scope.listings[index]
      console.log($scope.Info)
    };
  }
]);