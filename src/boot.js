/*
* @Author: TuanPM
* @Date:   2016-05-23 15:19:59
* @Last Modified by:   TuanPM
* @Last Modified time: 2016-08-14 12:09:29
*/

'use strict';
import React from 'React';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './app/App';


function boot(): React.Component {
  class Root extends React.Component {
    constructor() {
      super();
      this.state = {
        isLoading: true,
        store: configureStore(() => this.setState({isLoading: false})),
      };
    }
    render() {
      if (this.state.isLoading) {
        return null;
      }
      return (
        <Provider store={this.state.store}>
          <App />
        </Provider>
      );
    }
  }
  return Root;
}

export default boot;
