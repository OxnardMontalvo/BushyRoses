/// <reference path="C:\Users\deltagare\Source\Repos\BushyRoses\BushyRoses\Scripts/angular.js" />
/// <reference path="C:\Users\deltagare\Source\Repos\BushyRoses\BushyRoses\Scripts/angular-route.min.js" />

"use strict";

angular.module("app")

.controller("collectNoticeOfIntrestForm", function ($http) {
    var vm = this;

    vm.user = {};
    vm.readNoticeOfIntrestForm = function () {

        $http.post("Home/AddUser", vm.user)
        .then(function (response) {
            console.log(response.data);
        }), function (error) { };
    }
});

