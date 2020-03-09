const usingXpath = function(selector){
    return {
    selector,
    locateStrategy: 'xpath',
    supressNotFoundErrors: true,
  }
}
module.exports={
  usingXpath
}
