module.exports = function normalizeSpawnArguments(file, args, options) {
  if (typeof file !== 'string' || file.length === 0)
    throw new Error('ERR_INVALID_ARG_TYPE');

  if (Array.isArray(args)) {
    args = args.slice(0);
  } else if (args !== undefined && (args === null || typeof args !== 'object')) {
    throw new Error('ERR_INVALID_ARG_TYPE args');
  } else {
    options = args;
    args = [];
  }

  if (options === undefined)
    options = {};
  else if (options === null || typeof options !== 'object')
    throw new Error('ERR_INVALID_ARG_TYPE options');

  // Validate the cwd, if present.
  if (options.cwd != null && typeof options.cwd !== 'string') {
    throw new Error('ERR_INVALID_ARG_TYPE options.cwd');
  }

  // Validate detached, if present.
  if (options.detached != null && typeof options.detached !== 'boolean') {
    throw new Error('ERR_INVALID_ARG_TYPE options.detached');
  }

  // Validate the uid, if present.
  if (options.uid != null && !Number.isInteger(options.uid)) {
    throw new Error('ERR_INVALID_ARG_TYPE options.uid');
  }

  // Validate the gid, if present.
  if (options.gid != null && !Number.isInteger(options.gid)) {
    throw new Error('ERR_INVALID_ARG_TYPE options.gid');
  }

  // Validate the shell, if present.
  if (options.shell != null &&
      typeof options.shell !== 'boolean' &&
      typeof options.shell !== 'string') {
    throw new Error('ERR_INVALID_ARG_TYPE options.shell');
  }

  // Validate argv0, if present.
  if (options.argv0 != null && typeof options.argv0 !== 'string') {
    throw new Error('ERR_INVALID_ARG_TYPE options.argv0');
  }

  // Make a shallow copy so we don't clobber the user's options object.
  options = Object.assign({}, options);

  if (options.shell) {
    var command = [file].concat(args).join(' ');

    if (typeof options.shell === 'string') {
      file = options.shell;
    } else {
      file = '/bin/bash';
    }
    args = ['-l', '-c', command];
  }

  if (typeof options.argv0 === 'string') {
    args.unshift(options.argv0);
  }

  var env = options.env;

  return {
    file: file,
    args: args,
    options: options,
    envPairs: env
  };
}
