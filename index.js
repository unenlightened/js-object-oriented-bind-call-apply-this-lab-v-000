//Your code here
function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, arg1, arg2) {
  return fn.call(arg1, arg2)
}

function setThisWithApply(fn, obj, args) {
  return fn.apply(obj, args)
}

function returnNewFunctionOf(fn, obj) {
  return obj.fn = Array.prototype.fn.bind(obj)
}
