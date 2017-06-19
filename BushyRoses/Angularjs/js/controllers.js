/// <reference path="C:\Users\deltagare\Source\Repos\BushyRoses\BushyRoses\Scripts/angular.js" />
/// <reference path="C:\Users\deltagare\Source\Repos\BushyRoses\BushyRoses\Scripts/angular-route.min.js" />

angular.module("app")

.controller("collectForm", function () {
    var vm = this;

    
    if (vm.users == null) {
        vm.users = [];
    }

    vm.user = {
        Namn: "",
        Adress: "",
        Ort: "",
        Postnr: "",
        Epost: ""
    };

    vm.readForm = function () {
        vm.users.push(vm.user);
        console.log(vm.users);
    }
});

