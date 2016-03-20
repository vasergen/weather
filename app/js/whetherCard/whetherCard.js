"use strict"

angular.module("app")
    .component("wheatherCard", {
        bindings: {},
        controller: function(ServiceWhether, $scope) {
            this.selectedCity = null
            this.selectedDay = null

            $scope.$watch(() => this.selectedCity, (newValue, oldValue) => {
                if(newValue !== oldValue && typeof newValue == "object") {
                    this.getPrediction()
                }
            })

            this.setDay = function(day) {
                this.selectedDay = day
            }

            this.getPrediction = function() {
                if(!this.selectedCity || !this.selectedCity.id)
                    return

                this.daysPrediction = null
                this.selectedDay = null

                return ServiceWhether
                    .initWhetherByCityId(this.selectedCity.id)
                    .then(() => {
                        this.daysPrediction  = ServiceWhether.getDaysPrediction()
                    })
            }

            this.selectedCity = {"id":"691650","city":"Ternopil"}
            this.getPrediction()
        },
        templateUrl: 'app/js/whetherCard/whetherCard.tmpl.html'
    })