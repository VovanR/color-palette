/**
 * @author VovanR <mail@vovanr.com>
 */

define([
    'jquery',
    'underscore',
    'backbone',
], function (
    $,
    _,
    Backbone
) {

    'use strict';

    var PaletteSelectedCountView = Backbone.View.extend({
        el: '#palette-selected-count',
        /**
         * @param {Oblect} o
         * @param {Backbone.Collection} o.collection
         */
        initialize: function (o) {
            console.info('PaletteSelectedCountView');
            this.collection = o.collection;
            this.listenTo(this.collection, 'change:selected', this.render);
            this.render();
        },
        /**
         */
        render: function () {
            this.$el.text(this.collection.where({
                selected: true,
            }).length);
        },
    });

    return PaletteSelectedCountView;

});
