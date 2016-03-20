"use strict"

angular.module("app")
    .component("dateBlock", {
        bindings: {
            dayName: '<',
            number: '<',
            monthName: '<'
        },
        templateUrl: "app/js/dateBlock/dateBlock.tmpl.html"
    })