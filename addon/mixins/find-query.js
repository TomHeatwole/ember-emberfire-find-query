/*
  This mixin was created because EmberFire was depricated before it was fully developed. EmberFire
  does not support filtering or querying on 'find' calls to the database. This mixin can be added
  to any page in an Ember app that uses EmberFire and perform the 'find' function with queries.
  For exact instructions on how this mixin should be used, visit the README for this addon at
  https://github.com/TomHeatwole/ember-emberfire-find-query/blob/master/README.md
*/

import Ember from 'ember';

export default Ember.Mixin.create({
  
  // param: store - DS.store()
  // param: model - string - name of the model to be searched
  // param: params - map - attributes of model with their required values
  // param: cb - function - callback function to be executed after find
  //   - callback param: found - array - conaints only instances of the model which pass
  //     the requirements given in 'params'

  filterEqual: function(store, model, params, cb) {
    var found = [];
    store.findAll(model).then(function(objects) {
      var count = 0;
      var size = 0;
      objects.forEach(function(o) {
        size++;
      });
      objects.forEach(function(o) {
        count++;
        var countHere = count;
        var include = true;
        for (var key in params) {
          if (o.get(key) !== params[key]) {
            include = false;
          }
        }
        if (include) {
          found.push(o);
        }
        if (countHere === size) {
          cb(found);
        }
      });
    });
  },
 
  // param: store - DS.store()
  // param: model - string - name of the model to be searched
  // param: params - map - attributes of model with their required values
  // param: cb - function - callback function to be executed after find
  //   - callback param: found - array - conaints only instances of the model which pass
  //     the requirements given in 'params'

  filterNotEqual: function(store, model, params, cb) {
    var found = [];
    store.findAll(model).then(function(objects) {
      var count = 0;
      var size = 0;
      objects.forEach(function(o) {
        size++;
      });
      objects.forEach(function(o) {
        count++;
        var countHere = count;
        var include = true;
        for (var key in params) {
          if (o.get(key) === params[key]) {
            include = false;
          }
        }
        if (include) {
          found.push(o);
        }
        if (countHere === size) {
          cb(found);
        }
      });
    });
  },
});
