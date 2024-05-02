import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartPage from './assets/screens/StartPage';
import Second from './assets/screens/Second';
import Third from './assets/screens/Third';
import NavigationScreen from './assets/screens/NavigationScreen';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StartPage/> */}
      <NavigationScreen/>
  {/* <Second/> */}
  {/* <Third/> */}
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
