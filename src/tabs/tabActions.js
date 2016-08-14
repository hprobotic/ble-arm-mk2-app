/*
* @Author: Tuan PM
* @Date:   2016-05-23 20:33:13
* @Last Modified by:   TuanPM
* @Last Modified time: 2016-08-14 19:45:59
*/

'use strict';

import type { Action } from './tabTypes';

module.exports = {
  switchTab: (tab): Action => ({
    type: 'SWITCH_TAB',
    tab,
  }),
};
