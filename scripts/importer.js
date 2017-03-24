var path = require('path');
var fs = require('fs');
var exists = fs.existsSync;

module.exports = function(file) {
  if (file == 're-bulma-variables') {
    const resolvedPath = path.resolve(path.join(process.cwd(), '..', file + (path.extname(file) ? '' : '.scss')));
    const defaultPath = path.resolve(path.join(process.cwd(), 'default/re-bulma-variables.scss'));
    return {file: fs.existsSync(resolvedPath) ? resolvedPath : defaultPath};
  } else {
    return null;
  }
};