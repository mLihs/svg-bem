const spawnSync = require('../spawnSync')

test('should spawnSync', () => {
  const result = spawnSync('pwd', [], {encoding: 'utf8', cwd: '~/Desktop'})

  expect(result.err).toBe(undefined)
  expect(result.status).toBe(0)
  expect(result.stderr).toBe('')
  expect(result.stdout.trim()).toBe(String(NSString.stringWithString('~/Desktop').stringByExpandingTildeInPath()))
})
