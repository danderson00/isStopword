var isStopword = require('.')

test('a')
test('z')
test('about')
test('he')
test('she')
test('Wouldn\'t')
test('ISN\'T')
test('asdg')
test('abou')
test('zz')

function test(word) {
  console.log(word + ': ' + isStopword(word))
}