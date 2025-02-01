import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Button } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
       <View>
        <Image source={require('../assets/uovlogo.png')}/>
       </View>
       
       <View>
        <Text style={styles.footer}>UoV @ 2025</Text>
       </View>
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
  input:{
    border:'1px solid black',
    margin:12
  },
  footer: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    backgroundColor: '#4b0150',
    color:'white'
},
});
