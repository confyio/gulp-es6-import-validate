var util = require('gulp-util')
  , through = require('through2')
  , validator = require('es6-import-validate').ES6ModuleFile;

module.exports = function (options) {
  options = options || {};

  var files = [];

  var complain = function (err, callback) {
    err.forEach(function (error) {
      util.log(`${error.message} from ${error.name}`);
    });

    return callback(new util.PluginError('gulp-cloudfront-invalidate', 'Invalid import paths'));
  };

  var flush = function (callback) {
    console.log('live reload');
    validator.validateImports(files, options)
    .then(function (result) {
      util.log('Import paths validated');
      return callback();
    })
    .catch(function (err) {
      return complain(err, callback);
    });
  };

  return through.obj(function (file, enc, callback) {
    files.push(file.history[0]);
    return callback();
  }, flush);
};
