/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import MapScreen from './src/components/MapScreen';
import Dashboard from './src/components/Dashboard';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class App extends Component {
  render() {
    return (
      <View>
        <MapScreen />
        <Dashboard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    marginBottom: 32
  },
  body: {
    fontSize: 22
  }
});

export default App;
