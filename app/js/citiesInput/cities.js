"use strict"

angular.module("app")
    .component("citiesInput", {
        bindings: {
            selectedCity: '='
        },
        controller: function(ServiceCities) {
            this.search = ServiceCities.search
        },
        templateUrl:'app/js/citiesInput/citiesInput.tmpl.html'
    })