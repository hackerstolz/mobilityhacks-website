require('./map.styl');

export default function backgroundMap() {

    function initMap() {
        console.info("Init map");

        // Provide your access token
        L.mapbox.accessToken = 'pk.eyJ1Ijoid2FzY2huaWNrIiwiYSI6ImNpdGlheWE5MTAwMWU0dHFua2RsZ3N1aXgifQ.l4zhXE3oA4idoaajUYlHQg';
        // Create a map in the div #map
        var map = L.mapbox.map('map', 'mapbox.light', {
            scrollWheelZoom: false,
            zoomControl: false,
            style: 'mapbox://styles/mapbox/dark-v9', //hosted style id
            //style: 'mapbox://styles/waschnick/citib8ehl002h2jtk64xvv6uy', //hosted style id
            center: [52.31, 13.24], // starting position
            zoom: 3 // starting zoom
        });

        // HINT LATITUDE, LONGITUDE
        map.setView([52.5243700, 13.4105300], 14);

        // Disable drag and zoom handlers.
        map.dragging.disable();
        map.touchZoom.disable();
        map.doubleClickZoom.disable();
        map.scrollWheelZoom.disable();
        map.keyboard.disable();

        // Disable tap handler, if present.
        if (map.tap) {
            map.tap.disable();
        }
    }

    function doOnInterval() {
        if (L) {
            myStopFunction();
            initMap();
        }
    }

    var timer = setInterval(function () {
        doOnInterval();
    }, 100);


    function myStopFunction() {
        console.info("Stop timer");
        clearInterval(timer);
    }


}