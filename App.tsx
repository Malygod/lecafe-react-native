import React, { Suspense } from 'react';
import { enableScreens } from 'react-native-screens';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Login from './pages/layouts/Login';
import FriendSearch from './pages/layouts/FriendSearch';
import SideBar from './pages/layouts/SideBar';
import * as SystemUI from 'expo-system-ui';

SystemUI.setBackgroundColorAsync('transparent');
enableScreens(true);

type RootStackParamList = {
  Login: undefined;
  FriendSearch: undefined;
  SideBar: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar translucent />
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerStyle: { backgroundColor: '#FF6295' },
          headerTintColor: '#FF6295',
          ...TransitionPresets.ModalSlideFromBottomIOS
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
        <Stack.Screen
          name='SideBar'
          component={SideBar}
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
