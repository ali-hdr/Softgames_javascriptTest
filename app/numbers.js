if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    valueAtBit: function (num, bit) {
      var binary = parseInt(num).toString(2);
      var res = parseInt(binary[binary.length - bit]);
      console.log('num:> ', num, 'bit:> ', bit, 'binary:> ', binary, 'res:> ', res);
      return res;
    },

    base10: function (str) {
      var res = parseInt(str, 2).toString(10);
      return parseInt(res, 10);
    },

    convertToBinary: function (num) {
      return parseInt(num, 10).toString(2).padStart(8, '0');
    },

    multiply: function (a, b) {
      var scale = 1;
      while (a < 1 || b < 1) {
        if (a < 1) a = a * 10;
        if (b < 1) b = b * 10;
        scale = scale * 10;
      }
      console.log('a>', a, 'b>', b, 'scale>', scale);
      return (a * b) / scale;
    }
  };
});

