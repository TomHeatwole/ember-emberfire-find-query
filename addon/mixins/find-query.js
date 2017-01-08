/*
  This mixin was created because EmberFire was depricated before it was fully developed. EmberFire
  does not support filtering or querying on 'find' calls to the database. This mixin can be added
  to any page in an Ember app that uses EmberFire and perform the 'find' function with queries.
  For exact instructions on how this mixin should be used, visit the README for this addon at
  https://github.com/TomHeatwole/ember-emberfire-find-query/blob/master/README.md
*/

import Ember from 'ember';

export default Ember.Mixin.create({

  store: Ember.inject.service('store');
  
  // param: model - string - name of the model to be searched
  // param: attributes - array - names of the attributes that should be filtered by
  // param: values - array - required values of the filtered attributes
  // param: cb - function - callback function to be executed after find
  //   - callback param: found - array - conaints only instances of the model which pass
  //     the requirements given in 'attributes' and 'values'
  // ** Position in 'attributs' corresponds with position in 'values'

  filterEqual: function (model, attributes, values, cb) {
    var found = [];
    this.get('store').findAll(model).then(function(objects) {
      var count = 1;
      objects.forEach(function(o) {
        var countHere = count;
        include = true;
        for (var i = 0; i < attributes.length; i++) {
          if (o.get(attributes[i] !== values[i])) {
            include = false;
          }
        }
        if (include) {
          found.push(o);
        }
        if (countHere === objects.length) {
          cb(found);
        }
      });
    });
  }
});
