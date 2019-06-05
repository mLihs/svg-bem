const execFileSync = require('../execFileSync')

test('should execFileSync', () => {
  const result = execFileSync('pwd', [], {cwd: '~/Desktop'})

  expect(result.trim()).toBe(String(NSString.stringWithString('~/Desktop').stringByExpandingTildeInPath()))
})
