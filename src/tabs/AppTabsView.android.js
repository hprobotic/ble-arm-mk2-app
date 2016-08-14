/*
* @Author: TuanPM
* @Date:   2016-05-23 21:06:05
* @Last Modified by:   TuanPM
* @Last Modified time: 2016-05-24 11:24:41
*/

'use strict';

import React from 'React';
import { connect } from 'react-redux';
import {
  Navigator,
  StyleSheet,
  TouchableOpacity,
  Image,
  View
} from 'react-native'

import AppDrawerLayout from '../common/AppDrawerLayout';
import { Text } from '../common/AppText';
import AppColors from '../common/AppColors';
import MenuItem from './MenuItem';
import LoginButton from '../user/LoginButton';
import { switchTab } from './tabActions';
import type {Tab} from './tabReducer';

class AppTabsView extends React.Component {
  props: {
    tab: Tab;
    onTabSelect: (tab: Tab) => void;
    navigator: Navigator;
  };

  constructor(props) {
    super(props);

    this.renderNavigationView = this.renderNavigationView.bind(this);
    this.openProfileSettings = this.openProfileSettings.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
  }

  getChildContext() {
    return {
      openDrawer: this.openDrawer,
    };
  }

  openDrawer() {
    this.refs.drawer.openDrawer();
  }

  onTabSelect(tab: Tab) {
    if (this.props.tab !== tab) {
      this.props.onTabSelect(tab);
    }
    this.refs.drawer.closeDrawer();
  }

  openProfileSettings() {
    this.refs.drawer.closeDrawer();
    this.props.navigator.push({shareSettings: true});
  }

  renderNavigationView() {
    var scheduleIcon = this.props.day === 1
      ? require('./icons/schedule-icon-1.png')
      : require('./icons/schedule-icon-2.png');
    var scheduleIconSelected = this.props.day === 1
      ? require('./icons/schedule-icon-1-active.png')
      : require('./icons/schedule-icon-2-active.png');
    var accountItem, myAppItem, loginItem;

    if (this.props.user.isLoggedIn) {
      var name = this.props.user.name || '';
      accountItem = (
        <View>
          <TouchableOpacity onPress={this.openProfileSettings}>
            <ProfilePicture userID={this.props.user.id} size={80} />
          </TouchableOpacity>
          <Text style={styles.name}>
            {name.toUpperCase()}
          </Text>
        </View>
      );
      myAppItem = (
        <MenuItem
          title="My App"
          selected={this.props.tab === 'my-schedule'}
          onPress={this.onTabSelect.bind(this, 'my-schedule')}
          icon={require('./icons/my-schedule-icon.png')}
          selectedIcon={require('./icons/my-schedule-icon-active.png')}
        />
      );
    } else {
      accountItem = (
        <View>
          <Image source={require('./icons/profile.png')} />
          <Text style={styles.name}>
            APRIL 12 + 13 / SAN FRANCISCO
          </Text>
        </View>
      );
      loginItem = (
        <View style={styles.loginPrompt}>
          <Text style={styles.loginText}>
            Log in to find your friends at App.
          </Text>
          <LoginButton source="Drawer" />
        </View>
      );
    }
    return (
      <View style={styles.drawer}>
        <Image
          style={styles.header}
          source={require('./icons/profile.png')}>
          {accountItem}
        </Image>
        <MenuItem
          title="Schedule"
          selected={this.props.tab === 'schedule'}
          onPress={this.onTabSelect.bind(this, 'schedule')}
          icon={scheduleIcon}
          selectedIcon={scheduleIconSelected}
        />
        <MenuItem
          title="My App"
          selected={this.props.tab === 'my-schedule'}
          onPress={this.onTabSelect.bind(this, 'my-schedule')}
          icon={require('./icons/my-schedule-icon.png')}
          selectedIcon={require('./icons/my-schedule-icon-active.png')}
        />
        
        {loginItem}
      </View>
    );
  }

  renderContent() {
    switch (this.props.tab) {
      case 'schedule':
        return (
          <View><Text>Schedule</Text></View>
        );

      case 'my-schedule':
        return (
          <View><Text>my-schedule</Text></View>
        );

      
    }
    throw new Error(`Unknown tab ${this.props.tab}`);
  }

  render() {
    return (
      <AppDrawerLayout
        ref="drawer"
        drawerWidth={290}
        drawerPosition="left"
        renderNavigationView={this.renderNavigationView}>
        <View style={styles.content} key={this.props.tab}>
          {this.renderContent()}
        </View>
      </AppDrawerLayout>
    );
  }
}

AppTabsView.childContextTypes = {
  openDrawer: React.PropTypes.func,
};

function select(store) {
  return {
    tab: store.navigation.tab,
    day: store.navigation.day,
    user: store.user
  };
}

function actions(dispatch) {
  return {
    onTabSelect: (tab) => dispatch(switchTab(tab)),
  };
}

var styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
  },
  header: {
    padding: 20,
    justifyContent: 'flex-end',
  },
  name: {
    marginTop: 10,
    color: 'white',
    fontSize: 12,
  },
  loginPrompt: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  loginText: {
    fontSize: 12,
    color: AppColors.lightText,
    textAlign: 'center',
    marginBottom: 10,
  },
});

module.exports = connect(select, actions)(AppTabsView);
