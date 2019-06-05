const execSync = require('../execSync')

test('should execSync', () => {
  const result = execSync('cd ~/Desktop && pwd')

  expect(result.trim()).toBe(String(NSString.stringWithString('~/Desktop').stringByExpandingTildeInPath()))
})
