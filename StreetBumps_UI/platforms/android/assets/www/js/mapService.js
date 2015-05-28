angular.module('starter.controllers')
    .factory('mapService', function ($http) {
        function getlocation() {
            return $http.get("https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal");
        }
        return {
            search: getlocation
        };
    });