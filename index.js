//Your code here
function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, arg1, arg2) {
  return fn.call(arg1, arg2)
}

