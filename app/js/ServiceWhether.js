"use strict"

angular.module("app")
    .service("ServiceWhether", function($http) {
        let urlCompiled = _.template('http://api.openweathermap.org/data/2.5/forecast?id=<%=cityId%>&appid=b1b15e88fa797225412429c1c50c122a&units=metric')
        let prediction = null

        function initWhetherByCityId(cityId) {
            return $http
                    .get(urlCompiled({cityId: cityId}))
                    .then((responce) => {
                        prediction = responce.data
                        return prediction
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