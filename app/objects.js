if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    alterContext: function (fn, obj) {
      var res = fn.call(obj);
      return res;
    },

    alterObjects: function (constructor, greeting) {
      try {
        var obj = new constructor(greeting);
        constructor.prototype.greeting = greeting;
        return obj;
      } catch (err) { console.log(err); }
    },

    iterate: function (obj) {
      var res = [];
      for (var p in obj) {
        if (obj.hasOwnProperty(p))
          res.push(p + ': ' + obj[p]);
      }
      console.log(res);
      return res;
    }
  };
});
