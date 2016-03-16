"use strict"

angular.module("app")
    .component("daySmall", {
        bindings: {
            day: '<',
            dayPrediction: '<'
        },
        controller: function() {
            this.dayNameShort = moment(this.day).format('ddd')
            this.tempMax = _.max(_.map(this.dayPrediction, 'main.temp_max'))
            this.tempMin = _.min(_.map(this.dayPrediction, 'main.temp_min'))

            this.whetherMainArr = _.map(this.dayPrediction, 'weather[0].main')
            this.whetherDescriptionArr = _.map(this.dayPrediction, 'weather[0].description')
            this.whetherIconsArr = _.map(this.dayPrediction, 'weather[0].icon')
            this.whetherIconsArrDay = _.filter(this.whetherIconsArr, (icon) => icon.endsWith('d'))
            this.whetherIconDay = _.flowRight(_.last, _.values, _.invert, _.countBy)(this.whetherIconsArrDay)

        },
        templateUrl: 'app/daySmall/daySmall.tmpl.html'
    })