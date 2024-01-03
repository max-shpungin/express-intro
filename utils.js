const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route
  return strNums.map(function (num) {
    if (isNaN(parseInt(num))) {//TODO: isNaN will already try to convert to num
      throw new BadRequestError(`${num} is not a number`);
    }
    else {
      return parseInt(num);//TODO: should use Number() instead of parseInt
    }});
}

/**
 * Takes a string and returns an array of the individual values split on commas
 */

function convertQueryArray(strNums) {//TODO: name is how we will use, but should be a more generic name
  return strNums.split(',');
}

/**
 * Takes a callback function the name of that function, and a comma separated
 * string of numbers, and creates a JS Object with the name and result of
 * running callback on the numsString,
 * that will be converted into JSON in the routes
 */

function prepareResult(callback, callbackName, numsString) {
    const stringNumsArray = convertQueryArray(numsString);
    const numNums = convertStrNums(stringNumsArray);

    const result = {
      operation: callbackName,
      result: callback(numNums)
    };

    return result;
}

module.exports = { convertStrNums, convertQueryArray, prepareResult };