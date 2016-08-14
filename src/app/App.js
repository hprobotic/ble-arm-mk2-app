/*
* @Author: TuanPM
* @Date:   2016-05-23 15:28:45
* @Last Modified by:   TuanPM
* @Last Modified time: 2016-08-14 12:31:26
*/

'use strict';

import React from 'React';
import { connect } from 'react-redux';
import { 
  Text,
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';

import AppNavigator from './AppNavigator';


// import Paho  from '../lib/mqttws31';


var App = React.createClass({
  

  render: function() {

    
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor="blue"
          barStyle="default"
         />
        <AppNavigator />
     </View>
    );
  }
});
var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function select(store) {
  return {
    // loggedIn: store.user.isLoggedIn,
    // skipLoggedIn: store.user.hasSkippedLogin,
    // isLoggedIn: store.user.isLoggedIn || store.user.hasSkippedLogin
  };
}

export default connect(select)(App);
