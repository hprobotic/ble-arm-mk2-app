/*
* @Author: TuanPM
* @Date:   2016-05-23 15:29:58
* @Last Modified by:   TuanPM
* @Last Modified time: 2016-08-14 12:30:24
*/


'use strict'

import { connect } from 'react-redux';
import React from 'React';
import {
  Text,
  View,
  StyleSheet,
  Navigator,
  Platform,
} from 'react-native';

// import { resetLogin } from '../user/userActions';

import AppTabsView from '../tabs/AppTabsView';
// import LoginScreen from '../user/LoginScreen';
// import SignUpScreen from '../user/SignUpScreen';

var AppNavigator = React.createClass({
  componentDidMount: async function() {

    //console.log(this.props);
    
    //this.props.dispatch(resetLogin());
    
  },

  render: function() {
    return (
      <Navigator
        ref="navigator"
        style={styles.container}
        configureScene={(route) => {
          if (Platform.OS === 'android') {
            return Navigator.SceneConfigs.FloatFromBottomAndroid;
          }
          // TODO: Proper scene support
          if (route.shareSettings || route.friend) {
            return Navigator.SceneConfigs.FloatFromRight;
          } else {
            return Navigator.SceneConfigs.FloatFromBottom;
          }
        }}
        initialRoute={{}}
        renderScene={this.renderScene}
      />
    );
  },

  renderScene: function(route, navigator) {
    // if (!this.props.isLoggedIn) {
    //   if(this.props.signUp)
    //     return <SignUpScreen />;
    //   else 
    //     return <LoginScreen />;
    // }
    return <AppTabsView navigator={navigator} />;
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});


function select(store) {
  return {
    tab: store.navigation.tab,
    // loggedIn: store.user.isLoggedIn,
    // skipLoggedIn: store.user.hasSkippedLogin,
    // signUp: store.user.signUp,
    // isLoggedIn: store.user.isLoggedIn || store.user.hasSkippedLogin
  };
}

module.exports = connect(select)(AppNavigator);
