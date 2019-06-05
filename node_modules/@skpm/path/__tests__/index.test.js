const path = require('../')

test('resolve', () => {
  expect(path.resolve()).toBe(path.dirname(String(__command.script().URL().path().copy())))
  expect(path.resolve('./test')).toBe(path.dirname(String(__command.script().URL().path().copy())) + '/test')
  expect(path.resolve('../test')).toBe(path.dirname(path.dirname(String(__command.script().URL().path().copy()))) + '/test')
  expect(path.resolve('/test')).toBe('/test')
})

test('normalize', () => {
  expect(path.normalize('/test/../testa')).toBe('/testa')
})

test('isAsbolute', () => {
  expect(path.isAbsolute('/test')).toBe(true)
  expect(path.isAbsolute('./test')).toBe(false)
})

test('join', () => {
  expect(path.join('/test', './testa')).toBe('/test/testa')
})

test('relative', () => {
  expect(path.relative('/test/testa', '/test/testb')).toBe('../testb')
})

test('dirname', () => {
  expect(path.dirname('/test/testa')).toBe('/test')
})

test('basename', () => {
  expect(path.basename('/test/testa.txt')).toBe('testa.txt')
  expect(path.basename('/test/testa.txt', '.txt')).toBe('testa')
  expect(path.basename('/test/testa.txt', 'wrong')).toBe('testa.txt')
})

test('extname', () => {
  expect(path.extname('/test/testa.txt')).toBe('.txt')
  expect(path.extname('/test/testa')).toBe('')
})

test('format', () => {
  expect(path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
  })).toBe('/home/user/dir/file.txt')
  expect(path.format({
    root: '/',
    base: 'file.txt',
    ext: 'ignored'
  })).toBe('/file.txt')
  expect(path.format({
    root: '/',
    name: 'file',
    ext: '.txt'
  })).toBe('/file.txt')
})

test('parse', () => {
  expect(path.parse('/home/user/dir/file.txt')).toEqual({
    root: '/',
    dir: '/home/user/dir',
    base: 'file.txt',
    ext: '.txt',
    name: 'file'
  })
})
