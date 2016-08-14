/*
* @Author: TuanPM
* @Date:   2016-08-14 19:39:10
* @Last Modified by:   TuanPM
* @Last Modified time: 2016-08-14 21:05:26
*/

'use strict';

'use strict';

import type { Action, ThunkAction } from './bleTypes';

const initialState: State = { devices: []};

function devices(state: State = initialState, action: Action): State {
	switch(action.type) {
		case 'SCAN_START':
			console.log('start scan');
			state.devices = [];
			return state;
		case 'SCAN_COMPLETE':

			let devices = action.devices;
			
			console.log('SCAN_COMPLETE', devices);
			return {
        devices
      };
	}
  return state;
}

module.exports = devices;
