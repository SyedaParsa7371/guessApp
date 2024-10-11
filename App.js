import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './src/Screens/StartGamesScreen';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './src/Screens/GameScreen';
import Colors from './constants/colors';
import GameOver from './src/Screens/GameOver';

function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true)
    setGuessRounds(numberOfRounds)
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />)
  }

  if (gameIsOver && userNumber) {
    screen = (
    <GameOver
      userNumber={userNumber}
      roundsNumber={guessRounds}
      onStartNewGame={startNewGameHandler} /> 
    )
  }
  return (
    <LinearGradient colors={[Colors.primary500, Colors.primary400, Colors.primary300]} style={styles.rootContainer}>
      <ImageBackground source={require('./assets/images/backGround.png')}
        resizeMode='cover' style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootContainer}>
          {screen}
        </SafeAreaView>

      </ImageBackground>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});

export default App;
