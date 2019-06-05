const exec = require('../exec')

test('should exec', () => {
  return new Promise((resolve, reject) => {
    exec('cd ~/Desktop && pwd', (error, stdout, stderr) => {
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
