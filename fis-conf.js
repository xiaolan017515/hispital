fis.match('*.less', {
  // fis-parser-less ????????????
  parser: fis.plugin('less'),
  // .less ???????????????????? .css ????
  rExt: '.css'
});
fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

fis.match('*', {
  useHash: false
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});