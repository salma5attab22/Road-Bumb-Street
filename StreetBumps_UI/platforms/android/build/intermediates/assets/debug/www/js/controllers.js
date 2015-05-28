angular.module('starter.controllers', [])
    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

        //var opt = { template: 'Loading...', duration: 2000 };
        //$cordovaSplashscreen.show();
        //$ionicLoading.show(opt);

        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function () {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function () {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function () {
                $scope.closeLogin();
            }, 1000);
        };
    })
    .controller('PlaylistsCtrl', function ($scope) {
        $scope.playlists = [
            { title: 'Reggae', id: 1 },
            { title: 'Chill', id: 2 },
            { title: 'Dubstep', id: 3 },
            { title: 'Indie', id: 4 },
            { title: 'Rap', id: 5 },
            { title: 'Cowbell', id: 6 }
        ];
    })
    .controller('PlaylistCtrl', function ($scope, $stateParams) {
    })

.controller('TestCtrl', ['$scope', 'mobileserviceProvider',
    function ($scope, mobileserviceProvider) {
        $scope.insert = function () {
            alert("da5al f insert el controller");
            mobileserviceProvider.query();
        }
    }])
.controller('MapCtrl', ['$scope', 'mapService',
    function ($scope, mapService, $http) {

        //Maps Menna
        $scope.mapclick = function () {
            alert("da5al f el map");
            mapService.search().then(succ, fail);
        }
        function succ(res) {
            alert("Success");
        }
        function fail(ex) {
            alert("error");
        }

        //Maps Lamees
        var watchID = null;
        function getLocation() {
            var options = {
                enableHighAccuracy: true
                //timeout: 7000,
                //maximumAge: 0
            };

            //navigator.geolocation.getCurrentPosition(success, error, options);
            watchID = navigator.geolocation.watchPosition(success, error, options);

        }

        function error(e) {

            alert("error code:" + e.code + 'message: ' + e.message);
        }

        function success(position) {
            var lat = position.coords.latitude;
            alert(lat);
            var lng = position.coords.longitude;
            alert(lng);

            var myLocation = new google.maps.LatLng(lat, lng);
            var mapOptions = {
                center: new google.maps.LatLng(myLocation.lat(), myLocation.lng()),
                //center: new google.maps.LatLng(30.074515, 31.056890),
                zoom: 10,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map($scope.mapcanvas, mapOptions);
            var marker = new google.maps.Marker({
                position: myLocation,
                map: map,
                title: "you are here"
            });

        }

        function clearWatch() {
            if (watchID != null) {
                navigator.geolocation.clearWatch(watchID);
                watchID = null;
            }
        }

        // var t = setInterval(function() { getLocation()}, 3000)};

        $scope.mapinitialize = function () {
            getLocation();
        }


    }]);