import { TextInput, View, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import PrimaryButton from '../../components/ui/PrimaryButton'
import { useState } from 'react';
import Colors from '../../constants/colors';
import Title from '../../components/ui/Title';
import Card from '../../components/ui/Card';
import InstructionText from '../../components/ui/InstructionText';

function StartGameScreen({ onPickNumber }) {

    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }
    const { width, height } = useWindowDimensions();


    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            console.log('hi')
            Alert.alert('Invalid Number',
                'Number has to be a number betwen 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            )
            return;
        }
        onPickNumber(chosenNumber)
    }
    const marginTopDistance = height < 350 ? 30 : 65;

    return (
        <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior='position'>
            <View style={[styles.mainCont, { marginTop: marginTopDistance }]}>
                <Title>Guess The Number</Title>
                <Card>
                    <InstructionText >Enter Your Number

                    </InstructionText>
                    <TextInput style={styles.numberInput}
                        maxLength={2}
                        keyboardType="number-pad"
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={enteredNumber}
                        onChangeText={numberInputHandler}
                    />
                    <View style={styles.buttonCont}>
                        <View style={styles.buttonsContain}>
                            <PrimaryButton onPress={resetInputHandler} style={styles.text}>Reset</PrimaryButton>
                        </View>
                        <View style={styles.buttonsContain}>
                            <PrimaryButton onPress={confirmInputHandler} style={styles.text}>Confirm</PrimaryButton>
                        </View>
                    </View>
                </Card>
            </View>
        </KeyboardAvoidingView>
        </ScrollView>
    );
}
export default StartGameScreen;

//const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    mainCont: {
        flex: 1,
        //marginTop:deviceHeight <350 ? 30 :65,
        alignItems: 'center'

    },
    buttonCont: {
        flexDirection: 'row',
        marginTop: 15,
    },
    text: {
        color: Colors.primary100,

    },
    numberInput: {
        height: 50,
        width: 55,
        fontSize: 30,
        padding: 10,
        borderBottomColor: Colors.primary700,
        color: 'white5',
        fontWeight: '500',
        borderBottomWidth: 2,
        textAlign: 'center'
    },
    buttonsContain: {
        flex: 1,
    }

})