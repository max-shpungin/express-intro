/** Simple demo Express app. */

const express = require("express");
const app = express();

// useful error class to throw
const { NotFoundError } = require("./expressError");

const {findMean, findMedian, findMode} = require("./stats");
const { convertStrNums, convertQueryArray } = require("./utils")

const MISSING = "Expected key `nums` with comma-separated list of numbers.";


/** Finds mean of nums in qs: returns {operation: "mean", result } */

app.get('/mean', function(req, res){
  // get the string of numbers
  // split into an array
  // perform the operation
  // return the result in json format

  const queryNums = req.query.nums;
  const stringNums = convertQueryArray(queryNums);
  const numNums = convertStrNums(stringNums);

  return res.json({operation: "mean", result:findMean(numNums)})
});


/** Finds median of nums in qs: returns {operation: "median", result } */
app.get('/median', function(req, res){

});

/** Finds mode of nums in qs: returns {operation: "mean", result } */
app.get('/mode', function(req, res){

});

/** 404 handler: matches unmatched routes; raises NotFoundError. */
app.use(function (req, res) {
  throw new NotFoundError();
});

/** Error handler: logs stacktrace and returns JSON error message. */
app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;
  if (process.env.NODE_ENV !== "test") console.error(status, err.stack);
  return res.status(status).json({ error: { message, status } });
});



module.exports = app;