var execFile = require('./execFile')

function normalizeExecArgs(command, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = undefined;
  }

  // Make a shallow copy so we don't clobber the user's options object.
  options = Object.assign({}, options);
  options.shell = typeof options.shell === 'string' ? options.shell : true;

  return {
    file: command,
    options: options,
    callback: callback
  };
}

module.exports = function(command, options, callback) {
  var opts = normalizeExecArgs(command, options, callback);
  return execFile(opts.file, opts.options, opts.callback);
};
