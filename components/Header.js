import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import Color from '../constants/colors';
import TitleText from './TitleText';

const Header = props => {
    return (
        <View style={ { ...styles.headerBase, ...Platform.select({ ios: styles.headerIOS, android: styles.headerAndroid }) } }>
            <TitleText>{ props.title }</TitleText>
        </View>
    );
};

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: "center",
        justifyContent: 'center',
    },
    headerIOS: {
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    headerAndroid: {
        backgroundColor: Color.primary ,
    },
    title: {
        color: Platform.OS === 'ios' ? Color.primary : 'white',
    }
});

export default Header;