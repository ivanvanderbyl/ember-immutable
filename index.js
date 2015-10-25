/* jshint node: true */
'use strict';

var path = require('path');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'immutable',

  included: function(app) {
    this._super.included(app);

    var packagePath = path.join(this.project.addonPackages[this.project.name].path, 'node_modules', 'immutable', 'dist', 'immutable.js');
    app.import(packagePath, {
      exports: {
        'immutable': ['default']
      }
    });
  }

  // treeForAddon: function() {
  //   var inputNodes = [];
  //   var packagePath = path.join(this.project.addonPackages[this.project.name].path, 'node_modules', 'immutable', 'dist', 'immutable.js');
  //   inputNodes.push(this.treeGenerator(packagePath));

  //   var trees = new mergeTrees(inputNodes, {
  //     overwrite: true,
  //     annotation: true,
  //   });

  //   return this._super.treeForAddon.call(this, trees);
  // }
};
