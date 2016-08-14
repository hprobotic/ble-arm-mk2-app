/*
* @Author: Tuan PM
* @Date:   2016-05-23 20:04:34
* @Last Modified by:   TuanPM
* @Last Modified time: 2016-05-23 20:05:06
*/

'use strict';

import {
  StyleSheet, 
  Platform
} from 'react-native';

export function create(styles: Object): {[name: string]: number} {
  const platformStyles = {};
  Object.keys(styles).forEach((name) => {
    let {ios, android, ...style} = {...styles[name]};
    if (ios && Platform.OS === 'ios') {
      style = {...style, ...ios};
    }
    if (android && Platform.OS === 'android') {
      style = {...style, ...android};
    }
    platformStyles[name] = style;
  });
  return StyleSheet.create(platformStyles);
}
