var jsxz = require('jsxz')
var loaderUtils = require('loader-utils')

module.exports = function(source,map) {
  var self = this
  self.cacheable && self.cacheable()
  var sourceFilename = loaderUtils.getRemainingRequest(self)
  var current = loaderUtils.getCurrentRequest(self)
  var query = loaderUtils.parseQuery(self.query)

  var jsxzOptions = {templatesDir: query.dir,parserOptions: {
      inputSourceMap: map,
      sourceFileName: sourceFilename,
      sourceMapName: current
    }}
  jsxz(source,jsxzOptions,function(err,transform,htmlFiles){
    if(err){ self.callback(new Error(err)) }
    else{
      htmlFiles.forEach(function(f){ self.addDependency(f) })
      self.callback(null,transform.code,transform.map)
    }
  })
}
