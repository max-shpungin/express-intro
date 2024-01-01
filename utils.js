const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route
  return strNums.map(function (num) {
    if (isNaN(parseInt(num))) {
      throw new BadRequestError(`${num} is not a number`);
    }
    else {
      return parseInt(num);
    }});
}

function convertQueryArray(strNums) {
  return strNums.split(',');
}

/**Takes a callback function and the name of that function as inputs, and
 * creates a JS Object with the name and result that will be converted into JSON
 * in the routes
 */

function prepareResult(callback, callbackName) {

}

module.exports = { convertStrNums, convertQueryArray };