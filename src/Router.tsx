import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types.d';
import Welcome from './pages/Welcome/Welcome';
import MemberSign from './pages/MemberSign/MemberSign';
import MemberResult from './pages/MemberResult';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}></Stack.Screen>

        <Stack.Screen name="MemberSign" component={MemberSign}></Stack.Screen>
        <Stack.Screen
          name="MemberResult"
          component={MemberResult}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
