"use strict"

angular.module("app")
    .service('ServiceCities', function($http, $location) {
        let locations = []
        let isData = false

        let getUrl = () => {
            let url = ""
            if($location.$$host == 'localhost')
                return  "".concat($location.$$protocol,'://',$location.$$host,':',$location.$$port,'/data/cities.json')
            return "http://vasergen.github.io/wheather/data/cities.json"
        }

        let getData = () => {
            return $http.get(url).then((responce) => {
                return responce.data
            })
        }

        getData().then((data) => {
            locations = data
            isData = true
        }).catch((e) => {
            console.error(e)
        })

        return {
            getStatus: function() {
                return isData
            },
            getLocations: function() {
                return locations
            },
            search: function(typedCity) {
                //exit
                if(!isData)
                    return []

                //exit
                if(!typedCity || typedCity.length <= 1)
                    return []

                //exit
                if(typeof typedCity == "object")
                    return []

                let len = locations && locations.length || 0
                let limit = 5
                let res = []

                for(let i=0; i < len; i++) {
                    let city = locations[i] && locations[i].city
                    let cityLowerCase = city && city.toLowerCase()
                    let typedCityLowerCase = typedCity.toLowerCase()

                    if(cityLowerCase && cityLowerCase.startsWith(typedCityLowerCase)) {
                        res.push(locations[i])
                    }
                    if(res.length >= limit) break
                }
                return res
            }
        }
    })