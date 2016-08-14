/*
* @Author: Tuan PM
* @Date:   2016-05-23 21:16:10
* @Last Modified by:   TuanPM
* @Last Modified time: 2016-05-23 21:16:37
*/

'use strict';


import React, {
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

function AppTouchableIOS(props: Object): ReactElement {
  return (
    <TouchableHighlight
      accessibilityTraits="button"
      underlayColor="#3C5EAE"
      {...props}
    />
  );
}

const AppTouchable = Platform.OS === 'android'
  ? TouchableNativeFeedback
  : AppTouchableIOS;

module.exports = AppTouchable;
