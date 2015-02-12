/**
 * @author VovanR <mail@vovanr.com>
 */

define([
    'jquery',
    'lodash',
    'backbone',
    'handlebars',
    'text!templates/PaletteSelectedColorsTemplate.tpl',
    'views/PaletteSelectedColorView',
    'jqueryPerfectScrollbar',
], function (
    $,
    _,
    Backbone,
    Handlebars,
    PaletteSelectedColorsTemplate,
    PaletteSelectedColorView,
    jqueryPerfectScrollbar
) {

    'use strict';

    var PaletteSelectedColorsView = Backbone.View.extend({
        el: '#palette-selected-colors-placeholder',
        template: Handlebars.compile(PaletteSelectedColorsTemplate),

        /**
         * @param {Oblect} o Options
         * @param {Backbone.Collection} o.collection
         */
        initialize: function (o) {
            console.info('PaletteSelectedColorsView');
            this.collection = o.collection;
            this.listenTo(this.collection, 'add', this.render);
            this.listenTo(this.collection, 'remove', this.render);
            this.listenTo(this.collection, 'destroy', this.render);
            this.listenTo(this.collection, 'change:selected', this.render);

            this.$el.html(this.template);
            this.$content = this.$('.b-palette-selected-colors');
            this.$('.b-palette-selected-colors__scrollbar').perfectScrollbar({
                suppressScrollX: true,
                minScrollbarLength: 24,
            });
            this.render();
        },

        /**
         */
        render: function () {
            this.$content.empty();
            var selected = this.collection.where({
                selected: true,
            });
            _.each(selected, function (model) {
                var selectedColor = new PaletteSelectedColorView({
                    model: model,
                });
                this.$content.append(selectedColor.render());
            }, this);
        },
    });

    return PaletteSelectedColorsView;

});
