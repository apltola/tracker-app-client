import React, { useContext, useEffect } from 'react';
import { StatusBar, View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as AuthProvider, Context as AuthContext } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import AccountScreen     from './src/screens/AccountScreen';
import SigninScreen      from './src/screens/SigninScreen';
import SignupScreen      from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen   from './src/screens/TrackListScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

StatusBar.setBarStyle('dark-content');

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  const { state: authState } = useContext(AuthContext);

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
        <Stack.Screen name="MyTracks" component={TrackListScreen} options={{
          headerTitle: 'My Tracks'
        }} />
        <Stack.Screen name="TrackDetail" component={TrackDetailScreen} options={{
          headerBackTitle: "Back",
          headerTitle: "Track Detail"
        }} />
      </Stack.Navigator>
    );
  }

  const TrackCreateTab = () => (
    <Stack.Navigator>
      <Stack.Screen name="New Track" component={TrackCreateScreen} options={{
        header: () => null,
      }} />
    </Stack.Navigator>
  );

  const AccountTab = () => (
    <Stack.Navigator>
      <Stack.Screen name="My Account" component={AccountScreen} />
    </Stack.Navigator>
  )

  console.log('token => ', authState.token);

  return (
    <NavigationContainer theme={CustomTheme}>
      {authState.token !== null ?
        <Tab.Navigator initialRouteName="TrackListFlow">
          <Tab.Screen
            name="TrackCreate"
            component={TrackCreateScreen}
            options={{
              tabBarLabel: "Create New Track"
            }}
          />
          <Tab.Screen
            name="TrackListFlow"
            component={TrackListFlow}
            options={{
              tabBarLabel: "My Tracks",
            }}
          />
          <Tab.Screen
            name="Account"
            component={AccountTab}
            options={{
              tabBarLabel: "My Account"
            }}
          />
        </Tab.Navigator>
        :
        <Stack.Navigator initialRouteName={'ResolveAuth'}>
          <Stack.Screen name="ResolveAuth" component={ResolveAuthScreen} options={{ header: () => null }} />
          <Stack.Screen name="Signup" component={SignupScreen} options={{ header: () => null }} />
          <Stack.Screen name="Signin" component={SigninScreen} options={{ header: () => null }} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  )
}