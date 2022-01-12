import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

// types
import {HomeStackParamsList} from './HomeStack.types';
import {MainStackScreenProps} from '../MainStack.types';

// screens
import {Home} from './screens/Home/Home';

interface Props extends MainStackScreenProps<'HomeStack'> {}

const Stack = createNativeStackNavigator<HomeStackParamsList>();

const HomeStack: React.FC<Props> = () => {
  const screensOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={screensOptions}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export {HomeStack};
