const execFile = require('../execFile')

test('should execFile', () => {
  return new Promise((resolve, reject) => {
    execFile('ls', ['-la'], {cwd: '~/Downloads'}, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return
      }
      resolve({stdout, stderr});
    })
  }).then(({stdout, stderr}) => {
    expect(stderr.trim()).toBe('')
    expect(stdout.trim()).toBe(String(NSString.stringWithString('~/Desktop').stringByExpandingTildeInPath()))
  })
})
