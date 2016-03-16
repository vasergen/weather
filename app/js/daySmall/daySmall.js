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

            this.dayPredictionD = _.filter(this.dayPrediction, value => value.weather[0].icon.endsWith('d'))
            this.dayPredicitonN = _.filter(this.dayPrediction, value => value.weather[0].icon.endsWith('n'))

            this.whetherIconsArrD = _.map(this.dayPredictionD, 'weather[0].icon')
            this.whetherIconD = _.flowRight(_.last, _.values, _.invert, _.countBy)(this.whetherIconsArrD)

            this.whetherIdArrD = _.map(this.dayPredictionD, 'weather[0].id')
            this.whetherIdD = _.flowRight(_.last, _.values, _.invert, _.countBy)(this.whetherIdArrD)

            this.whetherIconClass = getWhetherIconClass(this.whetherIdD, true)

            this.whetherDescriptionArrD = _.uniq(_.map(this.dayPredictionD, 'weather[0].description'))
            this.whetherDescriptionD = this.whetherDescriptionArrD.join(', ')

            function getWhetherIconClass(whetherId, isDay) {
                let prefix = 'wi wi-'
                let code = whetherId
                var icon = weatherIcons[code].icon

                if (isDay && !(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
                    icon = 'day-' + icon;
                }

                icon = prefix + icon
                return icon
            }

        },
        templateUrl: 'app/js/daySmall/daySmall.tmpl.html'
    })