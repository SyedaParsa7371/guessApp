import { Text, View, StyleSheet, Alert, FlatList, useWindowDimensions } from "react-native";
import Title from "../../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../../components/game/NumberContainer";
import PrimaryButton from "../../components/ui/PrimaryButton";
import Card from "../../components/ui/Card";
import InstructionText from "../../components/ui/InstructionText";
import Ionicons from 'react-native-vector-icons/Ionicons';
import GuessLogItem from "../../components/game/GuessLogItem";
import Fonts from "../../constants/fonts";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum;
    }

}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(
        1,
        100,
        userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess])
    const { width, height } = useWindowDimensions();
    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        minBoundary = 1
        maxBoundary = 100
    }, [])


    function nextGuessHandler(direction) {
        if ((direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)) {

            Alert.alert("Don't lie", 'You know that this is wrong...',
                [{ text: 'Sorry!', style: 'cancel' }])
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess
        } else {
            minBoundary = currentGuess + 1
        }
        console.log(minBoundary, maxBoundary)
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber)
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds])
    }

    const guessRoundsListLength = guessRounds.length;

    let content = <>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionText style={styles.InstructionText}>Higher or Lower?</InstructionText>
            <View style={styles.buttonsContainer}>
            </View>  
            <View style={{flexDirection:"row"}}>

            <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="remove-outline" size={24} color="white" />
                    </PrimaryButton>
                </View>
              
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="add-outline" size={24} color="white" />
                    </PrimaryButton>
                </View>
            </View>
        </Card>
        
        
    </>
    if (width > 500) {

        content = (
            <>
               
                <View style={styles.buttonContainerWide}> 
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="remove-outline" size={24} color="white" />
                    </PrimaryButton>
                </View>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="add-outline" size={24} color="white" />
                    </PrimaryButton>
                </View>
                </View>
            </>
        )
    }


    return (
        <View style={styles.screens}>
            <Title>Opponent's Guess</Title>
            {content}
            <View style={styles.flatListContainer}>
                {/* {guessRounds.map(guessRounds=> <Text key={guessRounds}>{guessRounds}</Text>)} */}
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) =>
                        <GuessLogItem
                            roundNumber={guessRoundsListLength - itemData.index}
                            guess={itemData.item} />}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    )

}

export default GameScreen;

const styles = StyleSheet.create({
    screens: {
        flex: 1,
        padding: 24,
        marginTop: 50,
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        fontFamily: Fonts.roboto
    },
    buttonContainer: {
        flex: 1,
        padding:10,
    },
    InstructionText: {
        marginBottom: 14,

    },
    flatListContainer: {
        flex: 1,
        
    },
    buttonContainerWide:{
        flexDirection:"row",
        textAlign:"center",
    }

})