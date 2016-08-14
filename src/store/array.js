/*
* @Author: TuanPM
* @Date:   2016-05-23 15:55:14
* @Last Modified by:   TuanPM
* @Last Modified time: 2016-05-23 15:55:21
*/

'use strict';


module.exports = store => next => action =>
  Array.isArray(action)
    ? action.map(next)
    : next(action);
    
