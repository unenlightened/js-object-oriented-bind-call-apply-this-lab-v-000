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
  
}

describe('returnNewFunctionOf', function(){
  let fred;
  let functionToBeCopied;

  beforeEach(function(){
    functionToBeCopied = function (){
      return this
    }
   fred = { name: 'fred'}
  })
  it('returns a new function', function(){
    expect(returnNewFunctionOf(functionToBeCopied)).to.not.equal(functionToBeCopied)
    expect(typeof returnNewFunctionOf(functionToBeCopied)).to.equal("function")
  })
  it('sets the this argument to fred', function(){
    let newFunction = returnNewFunctionOf(functionToBeCopied, fred)
    expect(newFunction()).to.equal(fred)
  })