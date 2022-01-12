import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {MainStack} from './screens/MainStack';

interface Props {}

const AppContainer: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export {AppContainer};
