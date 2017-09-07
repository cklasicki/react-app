import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

import { ToolBar } from './components/toolbar';
import { TariffPlanTile } from './components/tariffPlanTile';

const menuIcon = require('./img/menu.png');
const notificationIcon = require('./img/notifications.png');

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <ToolBar />
        <ScrollView bounces={false} contentContainerStyle={{ backgroundColor: '#ebe9e9' }}
         onMomentumScrollBegin={() => console.log('startScrolling')} >

          <View style={{ flex: 1, flexDirection: 'column', }}>
            <View style={{ height: 16, backgroundColor: '#ebe9e9' }}></View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ width: 16, backgroundColor: '#ebe9e9' }}></View>
              <View style={{ flex: 1, backgroundColor: 'white' }}>
                <TariffPlanTile title={'Nazwa'} />
              </View>
              <View style={{ width: 16, backgroundColor: '#ebe9e9' }}></View>
            </View>
          </View>


          <View style={{ flex: 1, flexDirection: 'column', }}>
            <View style={{ height: 16, backgroundColor: '#ebe9e9' }}></View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ width: 16, backgroundColor: '#ebe9e9' }}></View>
              <View style={{ flex: 1, backgroundColor: 'white' }}>
                <TariffPlanTile title={'Nazwa'} />
              </View>
              <View style={{ width: 16, backgroundColor: '#ebe9e9' }}></View>
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: 'column', }}>
            <View style={{ height: 16, backgroundColor: '#ebe9e9' }}></View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ width: 16, backgroundColor: '#ebe9e9' }}></View>
              <View style={{ flex: 1, backgroundColor: 'white' }}>
                <TariffPlanTile title={'Nazwa'} />
              </View>
              <View style={{ width: 16, backgroundColor: '#ebe9e9' }}></View>
            </View>
          </View>

          <View style={{ height: 16, backgroundColor: '#ebe9e9' }}></View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ebe9e9'
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
