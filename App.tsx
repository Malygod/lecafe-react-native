import React, { Suspense } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Login from './pages/layouts/Login'
import FriendSearch from './pages/layouts/FriendSearch'
import * as SystemUI from 'expo-system-ui';


SystemUI.setBackgroundColorAsync('transparent');

type RootStackParamList = {
  Login: undefined;
  FriendSearch: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerStyle: { backgroundColor: '#FF6295' },
          headerTintColor: '#FF6295'
        }}
      >
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='FriendSearch'
          component={FriendSearch}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
