import React, {
    Component
} from 'react';

import {
    StyleSheet, View, Text, Image, TouchableOpacity
} from 'react-native';

const szewron = require('../img/szewron_kafel.png');

export class TariffPlanTile extends Component {
    render() {
        return (

            <View style={styles.wrapper}>
                <View style={styles.titleWrapper}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Twoja Taryfa</Text>
                    </View>
                    <View style={styles.navigation}>
                        <Image source={szewron} style={styles.icon}/>
                    </View>
                </View>
                <View style={styles.content}>
                    <Text>Main content</Text>
                </View>
            </View>
        );
    }
};

styles = StyleSheet.create({
    wrapper: {
        minHeight: 250
    },
    titleWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 68.5 
    },
    title: {
        flex: 0.8,
        backgroundColor: 'red'
    },
    navigation: {
        flex: 0.2,
        backgroundColor: 'blue'
    },
    titleText: {
        paddingLeft: 20,
        paddingTop: 20,
        fontSize: 24,
        fontFamily: 'Roboto-Light'
    },
    icon: {
        width: 9,
        height: 18
    },
    content: {
        minHeight: 100,
        minWidth: 100,
        backgroundColor: 'orange'  
    },
});