import React, { useState } from 'react';
import { View,
        Text,
        StyleSheet,
        Button,
        TouchableWithoutFeedback,
        Keyboard,
        Alert,
        Dimensions
    } from 'react-native';

import Card from '../components/Card';
import Color from '../constants/colors';
import Input from '../components/Input';
import NumberContaniner from '../components/numberContainer';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState()

    const numberInputHander = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));

    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false)
    };

    const confirmInputHandler = () => {
            const chosenNumber = parseInt(enteredValue);
            if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
                Alert.alert('Invalid number!','Number has to be a number between 1 and 99.', [{text: 'Ok',style: 'destructive', onPress: resetInputHandler}]);
                return;
            }

        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutPut;

    if (confirmed) {
        confirmedOutPut = (
            <Card style={ styles.summaryContaniner }>
                <Text>You slected</Text>
                <NumberContaniner>{ selectedNumber }</NumberContaniner>
                <MainButton onPress={ () => props.onStartGame(selectedNumber) }>Start Game</MainButton>
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={ ()=> {
            Keyboard.dismiss();
            } }>
                
            <View style={ styles.screen }>
                <TitleText >Start a New Game!</TitleText>
                <Card style={ styles.inputContanier }>
                    <BodyText>Select a Number</BodyText>
                    <Input 
                    style={ styles.input } 
                    blurOnSubmit 
                    autoCapitalize='none'
                    autoCorrect={ false } 
                    keyboardType="number-pad" 
                    maxLength={ 2 }
                    onChangeText={ numberInputHander }
                    value={ enteredValue }
                    />
                    <View style={ styles.buttonContanier }>
                        <View style={ styles.button }>
                            <Button title="Reset" onPress={ resetInputHandler } color={ Color.accent } />
                        </View>
                        <View style={ styles.button }>
                            <Button title="Confirm" onPress={ confirmInputHandler } color={ Color.primary } />
                        </View>
                    </View>
                </Card>
                { confirmedOutPut }
            </View>
        </TouchableWithoutFeedback>
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
        fontFamily: 'open-sans-bold',
    },
    inputContanier: {
        width: '80%',
        maxWidth: '95%',
        minWidth: 300,
        alignItems: 'center',
    },
    buttonContanier: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        // width: 100,
        width: Dimensions.get('window').width / 4,
    },
    input: {
        width: 50,
        textAlign: 'center',
    },
    summaryContaniner: {
        marginTop: 20,
        alignItems: 'center',
    },

});

export default StartGameScreen;