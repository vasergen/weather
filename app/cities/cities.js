"use strict"

angular.module("app")
    .component("cities", {
        bindings: {},
        controller: function(ServiceCities) {
            this.search = ServiceCities.search
        },
        templateUrl:'app/cities/cities.tmpl.html'
    })