import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function ProfileTap() {
    const Tab = createBottomTabNavigator();

  return (
         <Tab.Navigator>
            <Tab.Screen name='Profile' component={profile} options={{title:'Student Health Profile'}}/>
            <Tab.Screen name='Health' component={Health} options={{title:'Student Health Profile'}}/>
            <Tab.Screen name='BMI' component={BMI} options={{title:'Student Health Profile'}}/>

         </Tab.Navigator>
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
