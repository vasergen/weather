"use strict"

angular.module("app")
    .component("temperature", {
        bindings: {
            data: '<'
        },
        templateUrl: "app/js/temperature/temperature.tmpl.html"
    })