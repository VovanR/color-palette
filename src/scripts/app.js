define([
    'jquery',
    'underscore',
    'backbone',
    'collections/PaletteCollection',
    'views/PaletteView',
    'views/ColorView',
    'views/PaletteCountView',
    'views/PaletteAddColorView',
    'views/PaletteSelectedColorsView',
    'views/PaletteSelectedCountView',
    'views/PaletteMultiselectView',
], function (
    $,
    _,
    Backbone,
    PaletteCollection,
    PaletteView,
    ColorView,
    PaletteCountView,
    PaletteAddColorView,
    PaletteSelectedColorsView,
    PaletteSelectedCountView,
    PaletteMultiselectView
) {

    /**
     */
    var App = function () {
        this._init();
    };

    App.prototype = {
        /**
         * @private
         */
        _init: function () {
            var colorChars = [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9, 'a', 'b', 'c', 'd', 'e', 'f'];
            var colors = [];
            _.times(90, function () {
                colors.push({
                    value: '#' + _.sample(colorChars, 6).join(''),
                });
            });
            colors.push({
                name: 'fogdog',
                value: '#f06d06',
            });

            var paletteCollection = new PaletteCollection(colors);
            var paletteView = new PaletteView({
                collection: paletteCollection,
            });

            var paletteCountView = new PaletteCountView({
                collection: paletteCollection,
            });

            var paletteAddColorView = new PaletteAddColorView({
                collection: paletteCollection,
            });

            var paletteSelectedColorsView = new PaletteSelectedColorsView({
                collection: paletteCollection,
            });

            var paletteSelectedCountView = new PaletteSelectedCountView({
                collection: paletteCollection,
            });

            var paletteMultiselectView = new PaletteMultiselectView({
                collection: paletteCollection,
            });
        },
    };

    return App;

});
