/**
 * @module PaletteMultiselectView
 * @author Vladimir Rodkin <mail@vovanr.com>
 */

define([
	'jquery',
	'lodash',
	'backbone'
], function (
	$,
	_,
	Backbone
) {
	'use strict';

	/**
	* @alias module:PaletteMultiselectView
	*/
	var PaletteMultiselectView = Backbone.View.extend({
		el: '.palette-multiselect',

		/**
		* @param {Oblect} o Options
		* @param {Backbone.Collection} o.collection
		*/
		initialize: function (o) {
			console.info('PaletteCountView');
			this.collection = o.collection;
			this.listenTo(this.collection, 'add', this.render);
			this.listenTo(this.collection, 'remove', this.render);
			this.listenTo(Backbone, 'single-selection', this._changeSelectionMode);
			this.$checkbox = this.$('.palette-multiselect__checkbox');
		},

		/**
		*/
		render: function () {
			if (this.collection.length === 0) {
				this.$el.hide();
				return;
			}

			this.$el.show();
			this._changeSelectionMode(this.collection.getSelectionMode());
		},

		events: {
			/**
			*/
			'click .palette-multiselect__checkbox': function () {
				this.collection.toggleSingleSelectionMode(!this.$checkbox.prop('checked'));
			}
		},

		/**
		* @param {Boolean} mode
		* @private
		*/
		_changeSelectionMode: function (mode) {
			this.$checkbox.prop('checked', !mode);
		}
	});

	return PaletteMultiselectView;
});
