/*
* @Author: TuanPM
* @Date:   2016-08-14 19:58:01
* @Last Modified by:   TuanPM
* @Last Modified time: 2016-08-14 20:22:39
*/

'use strict';
export type Action = {
	{ type: 'SCAN_START' }
	| {type: 'SCAN_COMPLETE'}
}
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
