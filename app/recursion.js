if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function (require, exports, module) {

  exports.listOfFiles = function (data, dirName) {
    console.log(data.dir, dirName);
    if (!data.files || !Array.isArray(data.files) || data.files.length === 0) return [];
    var res = [];
    data.files.forEach(function (item, indx) {
      console.log(item, ' typeof item:: ', typeof item);
      if (typeof item === 'string') {
        if (!dirName || data.dir === dirName)
          res.push(item);
      }
      else {
        console.log('object> ', !dirName || data.dir === dirName);
        var addRes = [];
        if (!dirName || data.dir === dirName)
          addRes = exports.listOfFiles(item);
        else
          addRes = exports.listOfFiles(item, dirName);
        console.log('addRes >>', addRes);
        console.log(addRes.join(' **** '));
        res = res.concat(addRes);
      }
    });
    return res;
  };

  var permArr = [],
    usedChars = [];
    
  exports.permute = function (input) {
    var i, ch;
    for (i = 0; i < input.length; i++) {
      ch = input.splice(i, 1)[0];
      usedChars.push(ch);
      if (input.length === 0) {
        permArr.push(usedChars.slice());
      }
      exports.permute(input);
      input.splice(i, 0, ch);
      usedChars.pop();
    }
    return permArr;
  };

  return {
    listFiles: function (data, dir) {
      return exports.listOfFiles(data, dir);
    },
    permute: function (arr) {
      return exports.permute(arr);
    }
  };
});
