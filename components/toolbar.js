import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image, TouchableOpacity
} from 'react-native';

const menuIcon = require('../img/menu.png');
const notificationIcon = require('../img/notifications.png');

export class ToolBar extends Component {
  render() {
    return (
        <View>
          <View style={styles.toolbar}>
            <View style={styles.toolbarIconWrapper}>
              <TouchableOpacity>
              <Image source={menuIcon}
                style={[styles.toolbarMenuIcon]} /></TouchableOpacity>
            </View>
            <Text style={styles.toolbarTitle}>790111222</Text>
            <View style={styles.toolbarIconWrapper}>
              <Image source={notificationIcon}
                style={[styles.toolbarNotificationIcon]} />
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#583787',
    flexDirection: 'row',
    height: 56
  },
  toolbarTitle: {
    color: '#fff',
    textAlign: 'center',
    flex: 0.8,
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    paddingTop: 8.5
  },
  toolbarIconWrapper: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  toolbarMenuIcon: {
    width: 18,
    maxHeight: 12.5
  },
  toolbarNotificationIcon: {
    width: 18,
    maxHeight: 20
  }
});