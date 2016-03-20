"use strict"

angular.module("app")
    .component("daySmall", {
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
        },
        templateUrl: 'app/js/daySmall/daySmall.tmpl.html'
    })