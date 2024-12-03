import * as React from 'react';
import { NativeBaseProvider } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import HomeContainer from './components/Home/HomeContainer';
import DetailsContainer from './components/Details/DetailsContainer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeContainer} />
          <Stack.Screen name="Details" component={DetailsContainer} />
        </Stack.Navigator>
    </NativeBaseProvider>
  );
}