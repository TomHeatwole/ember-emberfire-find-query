/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-emberfire-find-query'

  included: function(app) {
    this._super.included(app) {
      app.import('addon/mixins/find-query.js');
    }
  }
};
