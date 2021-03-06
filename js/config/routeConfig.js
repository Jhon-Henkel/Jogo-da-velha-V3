angular.module("ticTacToe").config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "view/home.html",
        controller: "ticTacToeHomeCtrl",
    });

    $routeProvider.when("/lets-play", {
        templateUrl: "view/lets-play.php",
        controller: "ticTacToeLetsPlayCtrl",
    });

    $routeProvider.when("/config", {
        templateUrl: "view/configurations.html",
        controller: "ticTacToeConfigCtrl",
        resolve: {
            getConfig: function (databaseAPI) {
                return databaseAPI.getConfigs();
            }
        }
    });

    $routeProvider.otherwise({redirectTo: "/home"});
});