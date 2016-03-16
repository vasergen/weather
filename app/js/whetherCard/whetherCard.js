"use strict"

angular.module("app")
    .component("wheatherCard", {
        bindings: {},
        controller: function(ServiceWhether) {
            this.selectedCity = null
            this.prediction = null
            this.daysPrediction = null

            this.getPrediction = function() {
                if(!this.selectedCity || !this.selectedCity.id)
                    return

                return ServiceWhether
                    .initWhetherByCityId(this.selectedCity.id)
                    .then((data) => {
                        console.log('daysPrediction was changed')
                        this.prediction = data
                        this.daysPrediction  = ServiceWhether.getDaysPrediction()
                    })
            }
        },
        templateUrl: 'app/js/whetherCard/whetherCard.tmpl.html'
    })