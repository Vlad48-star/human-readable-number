function add(x) {
    return function(y) {
      return x + y;
    }
  }
function add(x) {
    var func = function(y) {
      return x + y;
    }
    return func;
  }