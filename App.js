

import { SafeAreaView, StyleSheet, Text, View ,StatusBar } from 'react-native';
import StoriesAndFeeds from './Components/StoriesAndFeeds';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dms from './Components/Dms';
import Search from './Components/Search';
import Profile from './Components/Profile';
import Notifications from './Components/Notifications';
import Footer from './Components/Footer';

const Stack = createNativeStackNavigator();


export default function App() {


  return (
    <View style={styles.container}>
      <NavigationContainer>
      
      <Stack.Navigator initialRouteName='Home'>
      
        <Stack.Screen name='Home' component={StoriesAndFeeds} options={{headerShown: false}} /> 
        <Stack.Screen name='Dms' component={Dms}  />
        <Stack.Screen name='Search' component={Search}  />
        <Stack.Screen name='Notifications' component={Notifications} footer={Footer} />
        <Stack.Screen name='my profile' component={Profile}  />
        {/* <Stack.Screen name='Home' component={StoriesAndFeeds} options={{headerShown: false}} /> */}
      </Stack.Navigator>
      </NavigationContainer>

      
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ' rgb(255, 255, 255)',
  },
});
