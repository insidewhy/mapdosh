var glob, babel, write

module.exports = function(pipelines) {
  var babelOpts = {
    presets: ['es2015']
  }

  pipelines.build = [
    glob({ basePath: 'src' }, '*.js'),
    babel(babelOpts),
    write('lib')
  ]
}
