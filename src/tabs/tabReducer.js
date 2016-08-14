/*
* @Author: Tuan PM
* @Date:   2016-05-23 20:37:26
* @Last Modified by:   TuanPM
* @Last Modified time: 2016-08-14 19:45:31
*/

'use strict';

import type { Action } from './tabTypes';


const initialState: State = { tab: 'ble'};

function navigation(state: State = initialState, action: Action): State {
  if (action.type === 'SWITCH_TAB') {
    return {...state, tab: action.tab};
  }
  return state;
}

module.exports = navigation;
