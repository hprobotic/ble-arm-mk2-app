/*
* @Author: TuanPM
* @Date:   2016-05-23 15:29:40
* @Last Modified by:   TuanPM
* @Last Modified time: 2016-08-14 20:44:21
*/

'use strict';

import { combineReducers } from 'redux';
import devices from '../ble/bleReducer'
import navigation from '../tabs/tabReducer';

module.exports = combineReducers({
  devices: devices,
  navigation: navigation,
});
