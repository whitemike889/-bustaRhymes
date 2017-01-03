/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image, 
  TouchableHighlight
} from 'react-native';

export default class bustaRhymes extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.header}
          source={require('./assets/logo.png')}
        />
        <Text style={styles.text}>
          Pick three words and "bust a Rhyme"
        </Text>
      </View>
      <TouchableHighlight onPress={this._onPressButton}>
      <Image
        style={styles.button}
        source={require('./assets/myButton.png')}
      />
    </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0080',
  },
  logo: {
    margin: 20,
    justifyContent: 'center',
    marginBottom: 100,
  },
  header: {
    alignSelf: 'center',
    margin: 30,
  },
  text: {
    fontSize: 20
  }
});

AppRegistry.registerComponent('bustaRhymes', () => bustaRhymes);
