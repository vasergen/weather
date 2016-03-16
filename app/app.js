"use strict"

window.onload = function() {
    angular.bootstrap(document, ["app"])
}



angular.module("app", ["mgcrea.ngStrap"])
    .config(function($typeaheadProvider) {
        function compare() {
            console.log(arguments);
        }

        angular.extend($typeaheadProvider.defaults, {
            minLength: 1,
            limit: 5,
            delay: { show: 100, hide: 100 },
            comparator: 'compare'
        });
    })