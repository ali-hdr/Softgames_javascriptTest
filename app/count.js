if (typeof define !== 'function') { var define = require('amdefine')(module); }


define(function (require, exports, module) {

  exports.timer = null;
  exports.counter = function (start, end, position) {
    if (!position || position === 0)
      position = 1;
    console.log(position);
    position++;
    if (position === end - start + 2) return;
    exports.timer = setTimeout(exports.counter, 100, start, end, position);
  };
  return {
    count: function (start, end) {
      exports.counter(start, end);
      return {
        cancel: function () {
          if (exports.timer)
            clearTimeout(exports.timer);
        }
      };
    }

  };
});