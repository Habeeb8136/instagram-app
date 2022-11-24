
import { SafeAreaView, StyleSheet, Text, View ,StatusBar } from 'react-native';
import Footer from './Components/Footer';
import Header from './Components/Header';
import PostCard from './Components/PostCard';
import StoriesAndFeeds from './Components/StoriesAndFeeds';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <StoriesAndFeeds />
      
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
