
/**
 * Module dependencies.
 */

var web = require('co-views');

// setup views mapping .html
// to the swig template engine

module.exports = web(__dirname + '/../web', {
  map: { html: 'swig' }
});