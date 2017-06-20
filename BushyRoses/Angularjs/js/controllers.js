/// <reference path="C:\Users\deltagare\Source\Repos\BushyRoses\BushyRoses\Scripts/angular.js" />
/// <reference path="C:\Users\deltagare\Source\Repos\BushyRoses\BushyRoses\Scripts/angular-route.min.js" />

"use strict";

angular.module("app")

.controller("collectNoticeOfIntrestForm", function ($http) {
    var vm = this;

    vm.user = {};
    var users = [];

    vm.readNoticeOfIntrestForm = function () {
        users.push(vm.user);
        console.log(users);

        //$http.post("HomeController/AddUser", vm.user)
        //.then(function (response) {

        //}), function (error) {

        //}.finally(function () {

        //});
    }
});

