import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {NavigationContainer} from '@react-navigation/native';
// import {fireEvent, render} from '@testing-library/react-native';

import {MainStack} from './MainStack';

describe('MainStack', () => {
  const props: any = {};

  it('should renders correctly', () => {
    const tree = renderer
      .create(
        <NavigationContainer>
          <MainStack {...props} />
        </NavigationContainer>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
