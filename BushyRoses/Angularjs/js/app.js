/// <reference path="C:\Users\deltagare\Source\Repos\BushyRoses\BushyRoses\Scripts/angular.js" />
/// <reference path="C:\Users\deltagare\Source\Repos\BushyRoses\BushyRoses\Scripts/angular-route.js" />

"use strict";
var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "/Angularjs/html/mainPage.html",
        controller: "collectNoticeOfIntrestForm",
        controllerAs: "vm"
    })
    .when("/Home/Index.html", {
        templateUrl: "/Angularjs/html/mainPage.html",
        controller: "collectNoticeOfIntrestForm",
        controllerAs: "vm"
    })

    .otherwise({ redirectTo: "/" });
});