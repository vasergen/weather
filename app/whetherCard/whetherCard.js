"use strict"

angular.module("app")
    .component("wheather", {
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
                        this.prediction = data
                        this.predictionPretty = JSON.stringify(data.list, null, 2)
                        this.daysPrediction  = ServiceWhether.getDaysPrediction()
                    })
            }
        },
        templateUrl: 'app/whetherCard/whetherCard.tmpl.html'
    })