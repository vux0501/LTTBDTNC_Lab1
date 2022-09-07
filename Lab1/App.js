import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.image}>
        <Image
        source={require('./img/circle.png')}
       />
      </View>

      <View style={styles.text1}>
        <Text style={styles.text1_1}>GROW</Text>
        <Text style={styles.text1_1}>YOUR BUSINESS</Text>
      </View>

      <View style={styles.text2}>
     
        <Text style={styles.text2_2}>We will help you to grow your business using online server</Text>
      </View>

      <View style={styles.button_container}>
        <Button title='Login' ></Button>
        <Button title='Sign up'></Button>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28F7AC',
    alignItems: 'center',
   
  },
  image: {
    marginTop: 150
  },
  text1_1:{
    textAlign: 'center',
    
    fontSize: 40,
    
  },
  text1:{
    marginTop: 70,
    fontSize: 30,
  },
  text2_2:{
    fontSize: 18,
    textAlign: 'center',
    marginTop: 60,
  },
  button_container:{
    marginTop: 20,
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
  
});
