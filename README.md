# ember-emberfire-find-query

This is an npm-published addon for making database searches with filters when using a Firebase database. `EmberFire`, the services linking Ember.JS to Google Firebase, was deprecated before a good method for filtered searches was written. This addon is intended to be used in Ember.JS applications that are implemented with `EmberFire`.

## Including the addon

First, install the addon with the following command:

* `ember install ember-emberfire-find-query`

Next, go to any controller, component controller or model where you wish to perform a find query. Add this line in your imports.

* `import FindQuery from 'ember-emberfire-find-query/mixins/find-query';`

Edit the export statement at the beginning of the file to include the `FindQuery` mixin. That should
look something like this:

* `export default Ember.Component.extend(FindQuery, {`

## Using the addon

After the addon is installed and the mixin is included in your controller or component, you will have access to the following functions.

### Specific Filters

The find-query mixin has seven "specific" filter functions:

* `filterEqual(store, model, params, callback)`
* `filterNotEqual(store, model, params, callback)`
* `filterGreaterThan(store, model, params, callback)`
* `filterLessThan(store, model, params, callback)`
* `filterGreaterThanOrEqualTo(store, model, params, callback)`
* `filterLessThanOrEqualTo(store, model, params, callback)`
* `filterContains(store, model, params, callback)`

#### Parameters

* `store`: This is the DS.store for your Ember app. Pass `this.store` in a controller or `this.get('targetObject.store')` in a component
* `model`: The name of the model which you wish to find (string)
* `params`: A map which maps the name of the attribute to the desired value
* `callback`: The callback function is called after the search is complete
  * The callback function takes in an array of the "found" instances of the model as a parameter

#### Examples

If you wanted to search your database for users with the first name Tom, it might look something like this:

```
this.filterEqual(this.store, 'user', {'firstName': 'Tom'}, function(toms) {
  // Do something with toms
});
```

If you wanted to search your database for blog posts with 500+ views and 30+ shares, it might look something like this:

```
this.filterGreaterThanOrEqualTo(this.store, 'post', {'views': 500, 'shares': 30}, function(posts) {
  // Do something with posts
});
```

If you wanted to search your database for articles with the word "unicorn" anywhere in article body (case insensitive), it might look something like this:
````
this.filterContains(this.store, 'article', {'body': 'unicorn'}, function(posts) {
  // Do something with posts
});
````
### Custom Filters 

Additionally, if you want to apply multiple filters to the same search, you would use the custom filter function:

* `filterCustom(store, model, params, callback)`
* `filterCustomOr(store, model, params, callback)`

#### Parameters

* `store`: the DS.store for your Ember app. Pass `this.store` inside a controller or `this.get('targetObject.store')` in a component 
* `model`: The name of the model which you wish to find (string)
* `params`: A map which maps the name of the attribute to an ordered pair (array) containing the operator and the desired value
  * Format: `{attribute1: [operator1, value1], attribute2: [operator2, value2] ... }`
  * Operators: `'=='`, `'!='`, `'>'`, `'<'`, `'>='`, `'<='`, and `'contains'`
* `callback`: The callback function is called after the search is complete
  * The callback function takes in an array of the "found" instances of the model as a parameter

#### Example

Say you run into a case where you want to search for blog posts containing the word "Trump" (case insensitive) with 500+ views, created by a user named user225.  Your find query might look something like this:

```
this.filterCustom(this.store, 'post', {
  'views': ['>=', 500],
  'author': ['==', 'user225'],
  'body': ['contains', 'trump']
}, function(posts) {
  // Do something with posts
});
```

Say you run into a case where you want to search for blog posts containing the word "Trump" (case insensitive) OR 500+ views OR blog posts created by a user named user225.  Your find query might look something like this:

```
this.filterCustomOr(this.store, 'post', {
  'views': ['>=', 500],
  'author': ['==', 'user225'],
  'body': ['contains', 'trump']
}, function(posts) {
  // Do something with posts
});
```
Note the difference between `filterCustom` and `filterCustomOr`: `filterCustom` will include the instance of the blog post if ALL of the query parameters are satisfied. `filterCustomOr` will include the instance of the blog post if ANY of the query parameters are satisfied.

=======
 
# How to contribute to this addon:

## Installation

* `git clone https://github.com/TomHeatwole/ember-emberfire-find-query/` (or the URL for whatever fork you are viewing).
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

##For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

