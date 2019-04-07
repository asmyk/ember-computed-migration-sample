const fs = require("fs"),
  path = require("path"),
  babel = require('babel-core');

// transform only .js files
const onlyJSFiles = (name) => /\.js$/.test(name);

function traverse(dir, callback, fileFilter) {
  fs.readdir(dir, function (err, files) {
    if (err) throw err;
    files.forEach(function (file) {
      var filepath = path.join(dir, file);
      fs.stat(filepath, function (err, stats) {
        if (stats.isDirectory()) {
          traverse(filepath, callback, fileFilter);
        } else if (stats.isFile() && fileFilter(filepath)) {
          callback(filepath, stats);
        }
      });
    });
  });
}


const manageFile = (filepath) => fs.readFile(filepath, function (err, data) {
  if (err) throw err;

  // convert from a buffer to a string
  var src = data.toString();

  // use our plugin to transform the source
  var out = babel.transform(src, {
    plugins: ["ember-property-computed"]
  });

  // print the generated code to screen
  // implement save code to files - replace original one or create a new one.
  console.log(out.code);
});


traverse("./app", manageFile, onlyJSFiles);
