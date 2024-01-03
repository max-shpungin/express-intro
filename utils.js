const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route
  return strNums.map(num=> parseInt(num));
}

function convertQueryArray(strNums){
  return strNums.split('');
}

module.exports = { convertStrNums, convertQueryArray };