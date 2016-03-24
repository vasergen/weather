"use strict"

angular.module("app")
    .component("daySmall", {
        bindings: {
            dayPrediction: '<',
            selectedDay: '<',
            day: '<'
        },
        controller: function(ServiceParseDayPrediction) {
            let pdp = ServiceParseDayPrediction
            pdp.init(this.dayPrediction)

            this.tempMax = pdp.tempMax()
            this.tempMin = pdp.tempMin()
            this.whetherId = pdp.whetherId()
            this.whetherIdD = pdp.whetherIdD()
            this.dayName = pdp.dayName()
            this.monthName = pdp.monthName()
            this.number = pdp.number()
            this.date = pdp.date()
        },
        templateUrl: 'app/js/daySmall/daySmall.tmpl.html'
    })