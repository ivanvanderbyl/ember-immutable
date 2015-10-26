/* jshint node: true */
'use strict';

// var path = require('path');
var esTranspiler = require('broccoli-babel-transpiler');

module.exports = {
  name: 'immutable',

  treeForAddon: function(tree) {
    var scriptTree = esTranspiler(tree, { stage: 0, browserPolyfill: true });


  //   var immutablePath = path.join(this.project.addonPackages['ember-immutable'].path, 'node_modules', 'immutable', 'src');
  //   var tree = this.treeGenerator(immutablePath);
    return this._super.treeForAddon.call(this, scriptTree);
  }
};
