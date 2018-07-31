if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(['jquery'], function ($) {

  return {
    async: function (value) {
      return new Promise(function (process, reject) {
        try {
          process(value);
        } catch (ex) {
          reject(ex);
        }
      });
    },
    manipulateRemoteData: function (url) {
      return new Promise(function (process, reject) {
        try {
          fetch(url).then(function (res) {
            return res.json();
          }).then(function (val) {
            var arr = [];
            val.people.forEach(
              function (item) {
                arr.push(item.name);
              }
            );
            arr.sort();
            console.log(arr.join(' '));
            process(arr);
          });
        } catch (ex) {
          reject(ex);
        }
      });
    }
  };
});
