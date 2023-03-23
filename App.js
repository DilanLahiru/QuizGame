/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import Toast, {BaseToast} from 'react-native-toast-message';
import LoadingScreen from './app/screens/LoadingScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegistrationScreen from './app/screens/RegistrationScreen';
import DashboardScreen from './app/screens/DashboardScreen';
import GameScreen from './app/screens/GameScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import {Provider} from 'react-redux';
import {store} from './store';

const Stack = createNativeStackNavigator();

LogBox.ignoreAllLogs();

const App = () => {
  const toastConfig = {
    success: ({...rest}) => (
      <BaseToast
        {...rest}
        style={{borderLeftColor: 'green'}}
        contentContainerStyle={{paddingHorizontal: 15}}
        text1Style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}
        onTrailingIconPress={() => Toast.hide()}
      />
    ),
    error: ({...rest}) => (
      <BaseToast
        {...rest}
        style={{borderLeftColor: 'red'}}
        contentContainerStyle={{paddingHorizontal: 15}}
        text1Style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}
        onTrailingIconPress={() => Toast.hide()}
      />
    ),
    info: ({...rest}) => (
      <BaseToast
        {...rest}
        style={{borderLeftColor: 'yellow'}}
        contentContainerStyle={{paddingHorizontal: 15}}
        text1Style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}
        onTrailingIconPress={() => Toast.hide()}
      />
    ),
  };

  return (
    <NavigationContainer>
      <Provider store={store}>
        <NativeBaseProvider>
          <Stack.Navigator>
            <Stack.Screen name="loading" component={LoadingScreen} />
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="registration" component={RegistrationScreen} />
            <Stack.Screen name="dashboard" component={DashboardScreen} />
            <Stack.Screen name="game" component={GameScreen} />
          </Stack.Navigator>
          <Toast config={toastConfig} ref={ref => Toast.setRef(ref)} />
        </NativeBaseProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
