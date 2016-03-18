"use strict"

angular.module("app")
    .component('dayBig', {
        bindings: {
            dayPrediction: '<'
        },
        controller: function(ParseDayPrediction) {
            ParseDayPrediction.init(this.dayPrediction)

            this.tempMax = ParseDayPrediction.tempMax()
            this.tempMin = ParseDayPrediction.tempMin()
            this.whetherIcon = ParseDayPrediction.whetherIcon()
            this.whetherIconD = ParseDayPrediction.whetherIconD()
            this.whetherIconN = ParseDayPrediction.whetherIconN()
            this.whetherId = ParseDayPrediction.whetherId()
            this.whetherIdD = ParseDayPrediction.whetherIdD()
            this.whetherIdN = ParseDayPrediction.whetherIdN()
            this.whetherDescription = ParseDayPrediction.whetherDescription()
            this.whetherDescriptionD = ParseDayPrediction.whetherDescriptionD()
            this.whetherDescriptionN = ParseDayPrediction.whetherDescriptionN()
            this.dayName = ParseDayPrediction.dayName()
            this.dayNameShort = ParseDayPrediction.dayNameShort()
            this.monthName = ParseDayPrediction.monthName()
            this.monthNameShort = ParseDayPrediction.monthNameShort()
            this.number = ParseDayPrediction.number()
            this.date = ParseDayPrediction.date()
            this.table = getTable()

            function getTable() {
                let table = []
                table.push(ParseDayPrediction.hoursArr())
                table.push(ParseDayPrediction.tempArr())
                table.push(ParseDayPrediction.whetherIdArr())
                table.push(ParseDayPrediction.pressureArr())
                table.push(ParseDayPrediction.humidityArr())
                return table
            }

            this.whetherIconClass = ParseDayPrediction.whetherIconClass(this.whetherIdD, true)
        },
        templateUrl: 'app/js/dayBig/dayBig.tmpl.html'
    })