/*
* @Author: Tuan PM
* @Date:   2016-05-23 20:29:37
* @Last Modified by:   TuanPM
* @Last Modified time: 2016-08-14 19:47:28
*/

'use strict';


import React from 'React';
import {
  StatusBar,
  TabBarIOS,
  Navigator,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';

import AppColors from '../common/AppColors';
import { switchTab } from './tabActions';
import type { Tab, Day } from './tabReducer';
import BLE from '../ble/BLE';
import BotControl from '../bot/BotControl';

class AppTabsView extends React.Component {
  props: {
    tab: Tab;
    onTabSelect: (tab: Tab) => void;
    navigator: Navigator;
  };

  constructor(props) {
    super(props);
    //this.handleDayChange = this.handleDayChange.bind(this);
  }

  componentDidMount() {
    StatusBar && StatusBar.setBarStyle('light-content');
  }

  onTabSelect(tab: Tab) {
    if (this.props.tab !== tab) {
      this.props.onTabSelect(tab);
    }
  }

  render() {
    var bleIcon = require('./icons/bluetooth-signal-indicator.png');
    var bleIconSelected = require('./icons/bluetooth-signal-indicator-active.png');
      
    return (
      <TabBarIOS tintColor={AppColors.darkText}>
        <TabBarIOS.Item
          title="Connect"
          selected={this.props.tab === 'ble'}
          onPress={this.onTabSelect.bind(this, 'ble')}
          icon={bleIcon}
          selectedIcon={bleIconSelected}>
            <BLE/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Control"
          selected={this.props.tab === 'control'}
          onPress={this.onTabSelect.bind(this, 'control')}
          icon={require('./icons/mechanical-arm.png')}
          selectedIcon={require('./icons/mechanical-arm-active.png')}>
            <BotControl/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }

  handleDayChange(day) {
    this.setState({selectedDay: day});
  }

}

function select(store) {
  return {
    tab: store.navigation.tab,
    day: store.navigation.day,
  };
}

function actions(dispatch) {
  return {
    onTabSelect: (tab) => dispatch(switchTab(tab)),
  };
}

export default connect(select, actions)(AppTabsView);
