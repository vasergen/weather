"use strict"

angular.module("app")
    .service("ServiceWhether", function($http) {
        let urlCompiled = _.template('http://api.openweathermap.org/data/2.5/forecast?id=<%=cityId%>&appid=e43ff9b7b359df3950d15f0134693641&units=metric')
        let prediction = null

        function initWhetherByCityId(cityId) {
            return $http
                    .get(urlCompiled({cityId: cityId}))
                    .then((response) => {
                        prediction = response.data
                    })
        }

        function getPrediction() {
            return prediction
        }

        function getDaysPrediction() {
            return _.groupBy(prediction.list, (value) => {
                return moment.unix(value.dt).format("YYYY-MM-DD")
            })
        }

        return {
            initWhetherByCityId,
            getPrediction,
            getDaysPrediction
        }
    })