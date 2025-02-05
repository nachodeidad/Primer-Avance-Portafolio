import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image source={require('./assets/wow.png')}
        style={styles.image}
      />
      <Image
        source={{ uri: 'https://static.wikia.nocookie.net/naruto/images/2/2e/Kakashi_Hatake_Parte_I_y_II_Anime.png/revision/latest?cb=20221120050147&path-prefix=es' }}
        style={styles.image}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',S
  },
  image: {
    width: 200,
    height: 200,

  },
});
