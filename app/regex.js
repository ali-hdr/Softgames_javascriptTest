if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    containsNumber: function (str) {
      var hasNumber = (/\d+/).test(str);
      return hasNumber;
    },

    containsRepeatingLetter: function (str) {
      var hasDuplicates = (/([a-zA-Z]).*?\1/).test(str);
      return hasDuplicates;
    },

    endsWithVowel: function (str) {
      var test = (/[aeiouAEIOU]$/).test(str);
      return test;
    },

    captureThreeNumbers: function (str) {
      var regX = /[0-9]{3}/;
      var res = (regX).test(str);
      if (res !== true) return false;
      else {
        res = str.match(regX)[0];
        return res;
      }
    },
    
    matchesPattern: function (str) {
      return (/^(([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$)/).test(str);

    },
    isUSD: function (str) {
      return (/^[$](?!0\.00)\d{1,3}(,\d{3})*(\.\d\d)?$/).test(str);
    }
  };
});
