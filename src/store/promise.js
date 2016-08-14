/*
* @Author: TuanPM
* @Date:   2016-05-23 15:55:36
* @Last Modified by:   TuanPM
* @Last Modified time: 2016-05-23 15:55:39
*/

'use strict';

function warn(error) {
  console.warn(error.message || error);
  throw error; // To let the caller handle the rejection
}

module.exports = store => next => action =>
  typeof action.then === 'function'
    ? Promise.resolve(action).then(next, warn)
    : next(action);
    
