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

    var PaletteMultiselectView = Backbone.View.extend({
        el: '.b-palette-multiselect',
        /**
         * @param {Oblect} o
         * @param {Backbone.Collection} o.collection
         */
        initialize: function (o) {
            console.info('PaletteCountView');
            this.collection = o.collection;
            this.listenTo(this.collection, 'add', this.render);
            this.listenTo(this.collection, 'remove', this.render);
            this.listenTo(Backbone, 'single-selection', this._changeSelectionMode);
            this.$checkbox = this.$('.b-palette-multiselect__checkbox');
            this.render();
        },
        /**
         */
        render: function () {
            if (this.collection.length === 0) {
                this.$el.hide();
                return;
            } else {
                this.$el.show();
            }
            this._changeSelectionMode(this.collection.getSelectionMode());
        },
        events: {
            /**
             */
            'click .b-palette-multiselect__checkbox': function (e) {
                this.collection.toggleSingleSelectionMode(!this.$checkbox.prop('checked'));
            },
        },

        /**
         * @private
         */
        _changeSelectionMode: function (mode) {
            this.$checkbox.prop('checked', !mode);
        },
    });

    return PaletteMultiselectView;

});