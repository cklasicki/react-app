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
        <ScrollView>
          <TariffPlanTile title={'Nazwa'}/>

          <TariffPlanTile title={'Nazwa'}/>
          <TariffPlanTile title={'Nazwa'}/>
          <TariffPlanTile title={'Nazwa'}/>
          <TariffPlanTile title={'Nazwa'}/>
          <TariffPlanTile title={'Nazwa'}/>
          <TariffPlanTile title={'Nazwa'}/>
          <TariffPlanTile title={'Nazwa'}/>
          <TariffPlanTile title={'Nazwa'}/>
          <TariffPlanTile title={'Nazwa'}/>
          <TariffPlanTile title={'Nazwa'}/>
          <TariffPlanTile title={'Nazwa'}/>
          <TariffPlanTile title={'Nazwa'}/>
          <TariffPlanTile title={'Nazwa'}/>
          <TariffPlanTile title={'Nazwa'}/>
          <TariffPlanTile title={'Nazwa'}/>
          <TariffPlanTile title={'Nazwa'}/>
          <TariffPlanTile title={'Nazwa'}/>
          <TariffPlanTile title={'Nazwa'}/>
          <TariffPlanTile title={'Nazwa'}/>
          <TariffPlanTile title={'Nazwa'}/>
          <TariffPlanTile title={'Nazwa'}/>
          <TariffPlanTile title={'Nazwa'}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column'
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
