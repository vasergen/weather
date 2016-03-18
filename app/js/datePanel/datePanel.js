"use strict"

angular.module("app")
    .component("datePanel", {
        bindings: {
            dayName: '<',
            number: '<',
            monthName: '<'
        },
        templateUrl: "app/js/datePanel/datePanel.tmpl.html"
    })