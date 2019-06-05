var execFileSync = require('./execFileSync')

function normalizeExecArgs(command, options) {
  // Make a shallow copy so we don't clobber the user's options object.
  options = Object.assign({}, options);
  options.shell = typeof options.shell === 'string' ? options.shell : true;

  return {
    file: command,
    options: options
  };
}

module.exports = function(command, options) {
  var opts = normalizeExecArgs(command, options);
  return execFileSync(opts.file, opts.options);
};
