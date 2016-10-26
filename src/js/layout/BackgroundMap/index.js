var BackgroundMap = {};


var initFunction = function () {
    console.info("Init background map");

    var map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: 0
    });

    var yx = L.latLng;

    var xy = function (x, y) {
        if (L.Util.isArray(x)) {    // When doing xy([x, y]);
            return yx(x[1], x[0]);
        }
        return yx(y, x);  // When doing xy(x, y);
    };

    // HINT CRS.Simple take the form of [y, x] instead of [x, y], in the same way Leaflet uses [lat, lng] instead of [lng, lat].
    // Then we can just add a L.ImageOverlay with the starmap image and its approximate bounds:
    var bounds = [[0, 0], [1800, 2880]];
    var image = L.imageOverlay(require('./background.jpg'), bounds).addTo(map);

    // And show the whole map:
    map.fitBounds(bounds);

    // // Disable drag and zoom handlers.
    // map.dragging.disable();
    // map.touchZoom.disable();
    // map.doubleClickZoom.disable();
    // map.scrollWheelZoom.disable();
    // map.keyboard.disable();
    //
    // // Disable tap handler, if present.
    // if (map.tap) {
    //     map.tap.disable();
    // }
    //
    // Map.map = map;

    var sol = xy(175.2, 145.0);
    var mizar = xy(41.6, 130.1);
    var kruegerZ = xy(13.4, 56.5);
    var deneb = xy(218.7, 8.3);

    L.marker(sol).addTo(map).bindPopup('Sol');
    L.marker(mizar).addTo(map).bindPopup('Mizar');
    L.marker(kruegerZ).addTo(map).bindPopup('Krueger-Z');
    L.marker(deneb).addTo(map).bindPopup('Deneb');
    var travel = L.polyline([sol, deneb]).addTo(map);

};


BackgroundMap.init = function () {
    function doOnInterval() {
        if (L) {
            myStopFunction();
            initFunction();
        }
    }

    var timer = setInterval(function () {
        doOnInterval();
    }, 100);


    function myStopFunction() {
        clearInterval(timer);
    }
};

//
// Map.flyToOne = function () {
//     console.info("FLY!");
//     // console.info(Map);
//     // console.info(this);
//     // console.info(Map.map.flyTo);
//
//     var start = [52.5243700, 13.4105300];
//     var start2 = [52.5243700, 13.4105300];
//     var target = [52.50029, 13.43625];
//
//     Map.map.panTo(target, 15);
//     // Map.map.setView(target, 15);
//
//     // Map.map.flyTo({
//     //     // These options control the ending camera position: centered at
//     //     // the target, at zoom level 9, and north up.
//     //     center: target,
//     //     zoom: 15,
//     //     bearing: 0,
//     //
//     //     // These options control the flight curve, making it move
//     //     // slowly and zoom out almost completely before starting
//     //     // to pan.
//     //     speed: 0.2, // make the flying slow
//     //     curve: 1, // change the speed at which it zooms out
//     //
//     //     // This can be any easing function: it takes a number between
//     //     // 0 and 1 and returns another number between 0 and 1.
//     //     easing: function (t) {
//     //         return t;
//     //     }
//     // });
// };

export default BackgroundMap;

