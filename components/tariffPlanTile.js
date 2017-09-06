import React, {
    Component
} from 'react';

import {
    StyleSheet, View, Text, Image,TouchableOpacity
} from 'react-native';

const szewron = require('../img/szewron_kafel.png');

export class TariffPlanTile extends Component {
    render() {
        return(
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Twoja taryfa</Text>
                <TouchableOpacity onPress={this._onPressButton}>
                <Image source={szewron} style={styles.icon}/>
                </TouchableOpacity>
            </View>
        );
    }
};

styles = StyleSheet.create({
    titleWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    title: {
        fontFamily: 'Roboto-Light',
        fontSize: 24,
        color: 'black'
    },
    icon: {
        width: 9,
        height: 18
    }
});