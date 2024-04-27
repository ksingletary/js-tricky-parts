function curriedAdd(total = 0) {

    if (arguments.length === 0) return 0;
    function adder(n) {
      if (n !== undefined) {
        adder.total += n;
        return adder;
      }
      return adder.total;
    }
  
  
    adder.total = total;
    return adder;
  }
  
  module.exports = { curriedAdd };