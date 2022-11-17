import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Footer from './Components/Footer';
import Header from './Components/Header';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Footer />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ' rgb(255, 255, 255)',
    
    
  },
});
