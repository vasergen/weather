"use strict"

angular.module("app")
    .component("whetherIcon", {
        bindings: {
            className: '<',
            iconId: '<'
        },
        controller: function() {
            this.whetherIconClass = getWhetherIconClass(this.iconId, true)

            function getWhetherIconClass (code, isDay) {
                let icon = weatherIcons[code] && weatherIcons[code].icon
                if (isDay && !(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
                    icon = 'day-' + icon;
                }
                return 'wi wi-' + icon
            }
        },
        templateUrl: "app/js/whetherIcon/whetherIcon.tmpl.html"
    })