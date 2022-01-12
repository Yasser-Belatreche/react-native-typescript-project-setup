import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {NavigationContainer} from '@react-navigation/native';

// import {fireEvent, render} from '@testing-library/react-native';

import {HomeStack} from './HomeStack';

describe('HomeStack', () => {
  const props: any = {};

  it('should renders correctly', () => {
    const tree = renderer
      .create(
        <NavigationContainer>
          <HomeStack {...props} />
        </NavigationContainer>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
