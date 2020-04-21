import React, { useState, useContext } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as AuthProvider, Context as AuthContext } from './src/context/AuthContext';
import AccountScreen     from './src/screens/AccountScreen';
import SigninScreen      from './src/screens/SigninScreen';
import SignupScreen      from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen   from './src/screens/TrackListScreen';

StatusBar.setBarStyle('dark-content');

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  const authState = useContext(AuthContext).state;

  const CustomTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'rgb(255, 255, 255)',
    }
  }

  const TrackListFlow = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="TrackList" component={TrackListScreen} />
        <Stack.Screen name="TrackDetail" component={TrackDetailScreen} options={{
          headerBackTitle: "Back"
        }} />
      </Stack.Navigator>
    );
  }

  const TrackCreateTab = () => (
    <Stack.Navigator>
      <Stack.Screen name="New Track" component={TrackCreateScreen} />
    </Stack.Navigator>
  );

  const AccountTab = () => (
    <Stack.Navigator>
      <Stack.Screen name="My Account" component={AccountScreen} />
    </Stack.Navigator>
  )

  return (
    <NavigationContainer theme={CustomTheme}>
      {authState.token !== null ?
        <Tab.Navigator initialRouteName="TrackListFlow">
          <Tab.Screen
            name="Account"
            component={AccountTab}
            options={{
              tabBarLabel: "My Account"
            }}
          />
          <Tab.Screen
            name="TrackCreate"
            component={TrackCreateTab}
            options={{
              tabBarLabel: "New Track"
            }}
          />
          <Tab.Screen
            name="TrackListFlow"
            component={TrackListFlow}
            options={{
              tabBarLabel: "My Tracks",
            }}
          />
        </Tab.Navigator>
        :
        <Stack.Navigator>
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{
              header: () => null,
            }}  
          />
          <Stack.Screen
            name="Signin"
            component={SigninScreen}
            options={{
              header: () => null
            }}
          />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}