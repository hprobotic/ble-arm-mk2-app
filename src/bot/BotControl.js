/*
 * @Author: TuanPM
 * @Date:   2016-08-14 14:34:05
 * @Last Modified by:   TuanPM
 * @Last Modified time: 2016-08-14 21:21:56
 */

'use strict';
import React from 'React';
import {
  Text,
  View,
  StyleSheet,
  DeviceEventEmitter,
  NativeAppEventEmitter,
  ListView,
} from 'react-native';

import {
  DeviceMotion,
} from 'NativeModules';

import BleManager from 'react-native-ble-manager';

import { connect } from 'react-redux';

var AppButton = require('../common/AppButton');

var BotControl = React.createClass({

  getInitialState: function() {
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    return {
      gravity: {
        x: 0,
        y: 0,
        z: 0,
      },
      rotation: {
        xy: 0,
        xz: 0,
        yz: 0,
      },
      devices: ds.cloneWithRows(['row 1', 'row 2']),
    }
  },

  componentDidMount: function() {
    let self = this;
    DeviceMotion.setDeviceMotionUpdateInterval(0.1);


    DeviceEventEmitter.addListener('MotionData', function(data) {
      let rotationxy = ((Math.atan2(data.gravity.x, data.gravity.y) - Math.PI) * 180 / Math.PI).toFixed(4);
      let rotationxz = ((Math.atan2(data.gravity.x, data.gravity.z) - Math.PI) * 180 / Math.PI).toFixed(4);
      let rotationyz = ((Math.atan2(data.gravity.y, data.gravity.z) - Math.PI) * 180 / Math.PI).toFixed(4);
      this.setState({
        gravity: data.gravity,
        rotation: {
          xy: rotationxy,
          xz: rotationxz,
          yz: rotationyz,
        }
      });
    }.bind(this));

    DeviceMotion.startDeviceMotionUpdates();

  },
  componentWillUnmount: function() {
    DeviceMotion.stopDeviceMotionUpdates();

  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text>x: {this.state.gravity.x}</Text>
        <Text>y: {this.state.gravity.y}</Text>
        <Text>z: {this.state.gravity.z}</Text>
        <Text>rxy: {this.state.rotation.xy}</Text>
        <Text>rxz: {this.state.rotation.xz}</Text>
        <Text>ryz: {this.state.rotation.yz}</Text>
     </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

function select(store) {
  return {
    // loggedIn: store.user.isLoggedIn,
    // skipLoggedIn: store.user.hasSkippedLogin,
    // isLoggedIn: store.user.isLoggedIn || store.user.hasSkippedLogin
  };
}

export default connect(select)(BotControl);
