var fs = require('fs')
var path = require('path')

var dir = __dirname
console.log(
  '{\n' +
  fs.readdirSync(dir)
  .filter(function (file) {
    return /\.html$/.test(file)
  })
  .map(function (file) {
    return '  '+JSON.stringify(file) + ": " +
      JSON.stringify(fs.readFileSync(path.join(dir, file), {encoding: 'utf8'}))
  }).join(',\n')
  + '\n}'
)
