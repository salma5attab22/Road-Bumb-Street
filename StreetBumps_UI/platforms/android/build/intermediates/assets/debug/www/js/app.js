// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic.utils', 'starter.controllers'])

.run(function ($ionicPlatform, $ionicPopup, $localstorage) {
    $ionicPlatform.ready(function () {

        if (window.Connection) {
            if (navigator.connection.type == Connection.NONE) {
                var roadTbl = $localstorage.getObject('roadTbl');
                for (var i = 0; i < roadTbl.length; i++) {
                    alert(roadTbl[i].name);
                    }
                $ionicPopup.confirm({
                        title: "Internet Disconnected",
                        content: "The internet is disconnected on your device."
                    })
                    .then(function(result) {
                        if (!result) {
                            ionic.Platform.exitApp();
                        }
                    });
            }
        }
        //setTimeout(function() {
        //    $cordovaSplashscreen.hide();
        //}, 5000);
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})
.run(function ($localstorage) {

    var client = new WindowsAzure.MobileServiceClient(
            'https://roadbumps-v1.azure-mobile.net/',
            'vOzxIlHpCUwhOIHpIHdVHLajUflgup44');

    var roadObj = client.getTable('Road');
    roadObj.read().then(function (roadObjs) {
        $localstorage.setObject('roadTbl', roadObjs);
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/menu.html",
            controller: 'AppCtrl'
        })
        .state('app.all_roads', {
            url: "/all_roads",
            views: {
                'menuContent': {
                    templateUrl: "templates/all_roads.html"
                }
            }
        })
        .state('app.my_roads', {
            url: "/my_roads",
            views: {
                'menuContent': {
                    templateUrl: "templates/my_roads.html"
                }
            }
        })
        .state('app.login', {
            url: "/login",
            views: {
                'menuContent': {
                    templateUrl: "templates/login.html"
                }
            }
        })
        .state('app.alerts', {
            url: "/alerts",
            views: {
                'menuContent': {
                    templateUrl: "templates/alerts.html"
                }
            }
        })
        .state('app.home', {
            url: "/home",
            views: {
                'menuContent': {
                    templateUrl: "templates/home.html" //,
                    //controller: 'HomeCtrl'
                }
            }
        })
        .state('app.playlists', {
            url: "/playlists",
            views: {
                'menuContent': {
                    templateUrl: "templates/playlists.html",
                    controller: 'PlaylistsCtrl'
                }
            }
        })
        .state('app.single', {
            url: "/playlists/:playlistId",
            views: {
                'menuContent': {
                    templateUrl: "templates/playlist.html",
                    controller: 'PlaylistCtrl'
                }
            }
        })
        .state('app.test', {
            url: "/test",
            views: {
                'menuContent': {
                    templateUrl: "templates/test.html",
                    controller: 'TestCtrl'
                }
            }
        })
    .state('app.map', {
        url: "/map",
        views: {
            'menuContent': {
                templateUrl: "templates/map.html",
                controller: 'MapCtrl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/map');
});