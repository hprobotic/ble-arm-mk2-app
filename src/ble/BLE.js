/*
 * @Author: TuanPM
 * @Date:   2016-08-14 14:34:05
 * @Last Modified by:   TuanPM
 * @Last Modified time: 2016-08-14 21:11:21
 */

'use strict';
import React from 'React';
import {
  Text,
  View,
  StyleSheet,
  ListView,
  TouchableOpacity,
  AlertIOS
} from 'react-native';

import {
  DeviceMotion,
} from 'NativeModules';

import { scanDevices } from './bleActions';

import { connect } from 'react-redux';

var AppButton = require('../common/AppButton');

var BLE = React.createClass({

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
      devices: ds.cloneWithRows([]),
    }
  },

  componentDidMount: function() {
    

  },

  scan: function() {
    this.props.dispatch(scanDevices());
  },

  componentWillUnmount: function() {

  },
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}> Select BLE device</Text>
        </View>
        <ListView
          dataSource={this.state.devices}
          renderRow  = {this.renderRow}
          renderHeader = {this.renderHeader}
          enableEmptySections = {true}
        />
        <View style={styles.footer}>
            <AppButton caption="Scan" type="primary" onPress={()=>this.scan()}/>
        </View>

     </View>
    );
  },
  renderHeader: function() {
    return (
      <View style={styles.rowStyle}>
        <Text style={styles.rowText}> Please scan for devices</Text>        
      </View>
    );
  },
  renderRow: function(rowData, sectionID, rowID) {
    return (
      <TouchableOpacity onPress={() => this.onPressRow(rowData, sectionID)}>
          <View style={styles.rowStyle}>
              <Text style={styles.rowText}>{rowData.name}</Text>        
          </View>
      </TouchableOpacity>
    );
  },
  onPressRow: function(rowData, sectionID) {
    var buttons = [{
      text: 'Cancel'
    }, {
      text: 'OK',
      onPress: () => this.createCalendarEvent(rowData, sectionID)
    }]
    AlertIOS.alert('User\'s Email is ' + rowData.email, null, null);
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: 100
  },
  section: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 6,
    backgroundColor: '#2196F3'
  },
  listview: {
    flexDirection: 'row',
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#3F51B5',
    paddingTop: 10,
    marginTop: 25,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  },
  rowStyle: {
    paddingVertical: 20,
    paddingLeft: 16,
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderBottomColor: '#E0E0E0',
    borderWidth: 1,
    flex: 1,
  },
  rowText: {
    color: '#212121',
    fontSize: 16
  },
  subText: {
    fontSize: 14,
    color: '#757575'
  },
});

function select(store) {
  return {
    devices: store.devices,
  };
}

export default connect(select)(BLE);
