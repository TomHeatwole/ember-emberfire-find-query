# Ember-emberfire-find-query

The first section of this README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone` this repository
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

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
=======

# ember-emberfire-find-query

This section of the README explains how to use this ember addon in your ember app.

## Including the addon

First, install the addon with the following command:

* `ember install https://github.com/TomHeatwole/ember-emberfire-find-query`

Next, go to any controller or component controller where you wish to perform a find query. Add this line in your imports.

* `import FindQuery from 'ember-emberfire-find-query/mixins/find-query';`

Edit the export statement at the beginning of the file to include the `FindQuery` mixin. That should
look something like this:

* `export default Ember.Component.extend(FindQuery, {`

## Using the addon
