/// <reference path="C:\Users\deltagare\Source\Repos\BushyRoses\BushyRoses\Scripts/angular.js" />
/// <reference path="C:\Users\deltagare\Source\Repos\BushyRoses\BushyRoses\Scripts/angular-route.js" />

var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "/Angularjs/html/mainPage.html",
        controller: "collectForm",
        controllerAs: "vm"
    })
    .when("/Home/Index.html", {
        templateUrl: "/Angularjs/html/mainPage.html",
        controller: "collectForm",
        controllerAs: "vm"
    })

    .otherwise({ redirectTo: "/" });
});