"use strict"

angular.module("app")
    .component('dayBig', {
        bindings: {
            dayPrediction: '<',
            whetherDescription: '<'
        },
        controller: function(ServiceParseDayPrediction) {
            let pdp = ServiceParseDayPrediction
            pdp.init(this.dayPrediction)

            this.whetherId = pdp.whetherId()
            this.whetherIdD = pdp.whetherIdD()
            this.description = pdp.whetherDescription()
            this.dayName = pdp.dayName()
            this.monthName = pdp.monthName()
            this.number = pdp.number()
            this.date = pdp.date()
            this.table = getTable()

            function getTable() {
                let table = {}
                table['hours'] = pdp.hoursArr()
                table['temperature'] = pdp.tempArr()
                table['whether'] = pdp.whetherIdArr()
                table['pressure'] = pdp.pressureArr()
                table['humidity'] = pdp.humidityArr()
                return table
            }
        },
        templateUrl: 'app/js/dayBig/dayBig.tmpl.html'
    })