"use strict"

angular.module("app")
    .component('dayBig', {
        bindings: {
            dayPrediction: '<',
            whetherDescription: '<'
        },
        controller: function(ParseDayPrediction) {
            let pdp = ParseDayPrediction
            pdp.init(this.dayPrediction)

            this.tempMax = pdp.tempMax()
            this.tempMin = pdp.tempMin()
            this.whetherIcon = pdp.whetherIcon()
            this.whetherIconD = pdp.whetherIconD()
            this.whetherIconN = pdp.whetherIconN()
            this.whetherId = pdp.whetherId()
            this.whetherIdD = pdp.whetherIdD()
            this.whetherIdN = pdp.whetherIdN()
            this.whetherDescription = pdp.whetherDescription()
            this.description = pdp.whetherDescription()
            this.whetherDescriptionD = pdp.whetherDescriptionD()
            this.whetherDescriptionN = pdp.whetherDescriptionN()
            this.dayName = pdp.dayName()
            this.dayNameShort = pdp.dayNameShort()
            this.monthName = pdp.monthName()
            this.monthNameShort = pdp.monthNameShort()
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