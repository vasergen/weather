"use strict"
angular.module("app")
    .service("ParseDayPrediction", function() {
        //private
        let dayPrediction = null
        let dayPredictionD = null
        let dayPredictionN = null

        let _whetherIcon = (dayPredictionPartial) => _.flowRight(_.last, _.values, _.invert, _.countBy)(_.map(dayPredictionPartial, 'weather[0].icon'))
        let _whetherId = (dayPredictionPartial) => _.flowRight(_.last, _.values, _.invert, _.countBy)(_.map(dayPredictionPartial, 'weather[0].id'))
        let _whetherDescription = (dayPredictionPartial) => _.uniq(_.map(dayPredictionPartial, 'weather[0].description')).join(', ')

        //public API
        let init = (_dayPrediction) => {
            dayPrediction = _dayPrediction
            dayPredictionD = _.filter(dayPrediction, value => value.sys.pod.endsWith('d'))
            dayPredictionN = _.filter(dayPrediction, value => value.sys.pod.endsWith('n'))
        }
        let tempMax = () => _.max(_.map(dayPrediction, 'main.temp_max'))
        let tempMin = () => _.min(_.map(dayPrediction, 'main.temp_min'))
        let whetherIcon = () => _whetherIcon(dayPrediction)
        let whetherIconD = () => _whetherIcon(dayPredictionD)
        let whetherIconN = () =>  _whetherIcon(dayPredictionN)
        let whetherId = () => _whetherId(dayPrediction)
        let whetherIdD = () => _whetherId(dayPredictionD)
        let whetherIdN = () => _whetherId(dayPredictionN)
        let whetherDescription = () => _whetherDescription(dayPrediction)
        let whetherDescriptionD = () => _whetherDescription(dayPredictionD)
        let whetherDescriptionN = () => _whetherDescription(dayPredictionN)
        let date = () => moment.unix(dayPrediction[0].dt).format("YYYY-MM-DD")
        let dayName = () => moment(date()).format('dddd')
        let dayNameShort = () => moment(date()).format('ddd')
        let monthName = () => moment(date()).format('MMMM')
        let monthNameShort = () => moment(date()).format('MMM')
        let number = () => moment(date()).format('D')
        let hoursArr = () => _.map(_.map(dayPrediction, 'dt'), (time) => moment.unix(time).hour() + ':00' )
        let whetherIdArr = () => _.map(dayPrediction, 'weather[0].id')
        let tempArr = () => _.map(dayPrediction, 'main.temp')
        let pressureArr = () => _.map(dayPrediction, 'main.pressure')
        let humidityArr = () => _.map(dayPrediction, 'main.humidity')

        return {
            init,
            tempMax,
            tempMin,
            whetherIcon,
            whetherIconD,
            whetherIconN,
            whetherId,
            whetherIdD,
            whetherIdN,
            whetherDescription,
            whetherDescriptionD,
            whetherDescriptionN,
            date,
            dayName,
            dayNameShort,
            monthName,
            monthNameShort,
            number,
            hoursArr,
            whetherIdArr,
            tempArr,
            pressureArr,
            humidityArr
        }
    })