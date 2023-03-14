import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import * as Speech from 'expo-speech';

export default function App() {

  const [text, setText] = useState('');

  const speak = () => {
    Speech.speak(text);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setText(text)}
        value={text}
      />
      <Button title="Press to hear text" onPress={speak} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    borderColor: "lightgrey",
    borderWidth: 1,
    margin: 20,
    padding: 5,
  },
});
