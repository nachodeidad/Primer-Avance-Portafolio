import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Text, Appbar, TextInput } from 'react-native-paper';

export default function App() {
  const [text, setText] = React.useState('');
  return (
    <View style={styles.container}>
      <Appbar>
        <Appbar.Content title="React Native Paper" />
      </Appbar>
      <TextInput
        label='Type something'
        value={text}
        onChangeText={text => setText(text)}
      />
      {/* Button compontent */}
      <Button node="contained" onPress={() => alert(`Text: ${text}`)}
        style={styles.Button}
      >ee</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: '',
    justifyContent: 'center',
  },
  Button: {
    backgroundColor: 'black',
  }
});
