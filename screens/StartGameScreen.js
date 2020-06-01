import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Card from '../components/Card';
import Color from '../constants/colors';
import Input from '../components/Input';

const StartGameScreen = props => {
    return (
        <View style={ styles.screen }>
            <Text style={ styles.title }>Start a New Game!</Text>
            <Card style={ styles.inputContanier }>
                <Text>Select a Number</Text>
                <Input style={ styles.input }/>
                <View style={ styles.buttonContanier }>
                    <View style={ styles.button }>
                        <Button title="Reset" onPress={ ()=> {} } color={ Color.accent } />
                    </View>
                    <View style={ styles.button }>
                        <Button title="Confirm" onPress={ ()=> {} } color={ Color.primary } />
                    </View>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
    },
    inputContanier: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContanier: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        width: 100,
    },
    input: {
        width: 50,
    },
});

export default StartGameScreen;