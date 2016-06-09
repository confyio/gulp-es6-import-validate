# gulp-es6-import-validate
A gulp plugin to validate ES6 harmony module import statements

## Installation

```bash
npm install gulp-es6-import-validate
```

## Usage

```javascript
var gulp = require('gulp')
  , validate = require('gulp-es6-import-validate');

var settings = {
};

gulp.task('invalidate', function () {
  return gulp.src('*')
    .pipe(validate(settings));
});
```

If you like this project, please watch this and follow me.

## Contributors
Here is a list of [Contributors](http://github.com/confyio/gulp-es6-import-validate/contributors)

### TODO

__I accept pull requests and guarantee a reply back within a day__

## License
MIT/X11

## Bug Reports
Report [here](http://github.com/confyio/gulp-es6-import-validate/issues). __Guaranteed reply within a day__.

## Contact
Pavan Kumar Sunkara (pavan.sss1991@gmail.com)

Follow me on [github](https://github.com/users/follow?target=pksunkara), [twitter](http://twitter.com/pksunkara)
