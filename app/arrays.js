if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    indexOf: function (arr, item) {
      return arr.indexOf(item);
    },

    sum: function (arr) {
      return arr.reduce(function (a, b) { return a + b; }, 0);
    },

    remove: function (arr, item) {
      var indx = arr.indexOf(item);
      do {
        arr.splice(indx, 1);
        indx = arr.indexOf(item);
      } while (indx > -1);
      return arr;
    },

    removeWithoutCopy: function (arr, item) {
      return this.remove(arr, item);
    },

    append: function (arr, item) {
      arr.push(item);
      return arr;
    },

    truncate: function (arr) {
      arr.splice(arr.length - 1, 1);
      return arr;
    },

    prepend: function (arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail: function (arr) {
      arr.splice(0, 1);
      return arr;
    },

    concat: function (arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert: function (arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count: function (arr, item) {
      var count = {};
      arr.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
      return count[item];
      ////console.log(count);
    },

    duplicates: function (arr) {
      var arr1 = [];
      var arr2 = [];
      arr.forEach(function (i) {
        if (arr1.indexOf(i) === -1) arr1.push(i);
        else if (arr2.indexOf(i) === -1) arr2.push(i);
      });
      return arr2;
    },

    square: function (arr) {
      arr.forEach(function (i, indx) {
        arr[indx] = Math.pow(i, 2);
      });
      return arr;
    },

    findAllOccurrences: function (arr, target) {
      var occ = [];
      var indx = arr.indexOf(target);
      var cntr = 0;
      do {
        occ.push(indx + cntr);
        arr.splice(indx, 1);
        indx = arr.indexOf(target);
        cntr++;
      }
      while (indx >= 0);
      //console.log('occ> ', occ.join(' '));
      return occ;
    }
  };
});
