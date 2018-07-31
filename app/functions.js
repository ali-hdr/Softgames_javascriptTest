if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    argsAsArray: function (fn, arr) {
      var res = fn.apply(null, arr);
      return res;
    },

    speak: function (fn, obj) {
      return fn.apply(obj);
    },

    functionFunction: function (str) {
      return function (val) {
        return str + ', ' + val;
      };
    },

    makeClosures: function (arr, fn) {
      var res = [];
      arr.forEach(function (el) {
        console.log(el);
        var sq = fn(el);
        console.log('sq:', sq);
        res.push(function () { return sq; });
      });
      console.log(res.join(' '));
      return res;
    },

    partial: function (fn, str1, str2) {
      return function (str3) {
        var res = fn(str1, str2);
        res = res.substr(0, res.length - 1);
        console.log(res);
        res += str3;

        console.log('str1: ', str1, 'str2: ', str2, 'str3:', str3, res);
        return res;
      };
    },

    useArguments: function () {
      var args = [];
      for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      console.log(args.join(' -- '));
      var res = args.reduce(function (a, b) { return a + b; });
      console.log(res);
      return res;
    },

    callIt: function (fn) {
      var args = [];
      for (var i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      return fn.apply(null, args);
    },

    partialUsingArguments: function (fn) {
      var args = [];
      for (var i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      return function () {
        var args2 = [];
        for (var i = 0; i < arguments.length; i++) {
          args2.push(arguments[i]);
        }
        args = args.concat(args2);
        console.log('args: ', args.join(','));
        var res = fn.apply(null, args);
        return res;
      };
    },

    curryIt: function (fn) {
      return a => b => c => { return fn(a, b, c); }
      // return function (a) {
      //   return function (b) {
      //     return function (c) {
      //       return fn(a, b, c);
      //     };
      //   };
      // };
    }
  };
});
