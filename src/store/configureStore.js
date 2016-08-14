/*
* @Author: TuanPM
* @Date:   2016-05-23 15:31:06
* @Last Modified by:   TuanPM
* @Last Modified time: 2016-05-24 14:13:27
*/


'use strict'

import { 
  applyMiddleware, 
  createStore,
} from 'redux';
var thunk = require('redux-thunk').default;

import promise from './promise';
import array from './array';
import reducers  from '../app/reducers';
import createLogger from 'redux-logger';
import {
  persistStore, 
  autoRehydrate
} from 'redux-persist';

import { AsyncStorage } from 'react-native';

var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

var logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

var createAppStore = applyMiddleware(thunk, promise, array, logger)(createStore);

function configureStore(onComplete: ?() => void) {
  const store = autoRehydrate()(createAppStore)(reducers);
  persistStore(store, {storage: AsyncStorage}, onComplete);
  if (isDebuggingInChrome) {
    window.store = store;
  }
  return store;
}

module.exports = configureStore;
