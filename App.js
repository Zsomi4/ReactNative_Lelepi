import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Body from './components/body';
import Header from './components/header';
import Footer from './components/footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
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
});
