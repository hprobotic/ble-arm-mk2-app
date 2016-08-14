/*
 * @Author: TuanPM
 * @Date:   2016-08-14 19:49:17
 * @Last Modified by:   TuanPM
 * @Last Modified time: 2016-08-14 20:29:16
 */

'use strict';
import BleManager from 'react-native-ble-manager';
import {
  DeviceEventEmitter,
  NativeAppEventEmitter,
} from 'react-native';

async function _scanDevices(): Promise {

  return new Promise((resolve, reject) => {
  	var devices = [];
    NativeAppEventEmitter.addListener(
      'BleManagerDiscoverPeripheral',
      (args) => {
        // The id: args.id
        // The name: args.name
        devices.push(args);

      }
    );

    BleManager.scan([], 5, false)
      .then(() => {
        // Success code
        console.log('Scan started');
        setTimeout(()=>{
        	resolve({type: 'SCAN_COMPLETE', devices: devices});
        }, 5000);
      });
  });
}
function scanDevices(): ThunkAction {
	return (dispatch) => {
		
		dispatch(startScan());

		_scanDevices().then(
			(result) => {
				dispatch(result);
			}
		)
	}
}
function startScan() {
	return {type: 'SCAN_START'};
}
module.exports = { scanDevices };
