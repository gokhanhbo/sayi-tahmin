import React, { useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGame';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if (userNumber) {
    content =  <GameScreen userChoice={userNumber} />;
  };

  return (
    <View style={styles.screen}>
     <Header title="Hadi Bir Sayı Tut :)"/>
     <StartGameScreen/>
    {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
