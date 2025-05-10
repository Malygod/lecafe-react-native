import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Login from './pages/layouts/Login'

type RootStackParamList = {
  Login: undefined;
  Details: { itemId: number; otherParam?: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerStyle: { backgroundColor: '#FF6295' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: 'Primary screen' , headerMode: 'screen'}}
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
