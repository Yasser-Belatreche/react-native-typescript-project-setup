import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
// import {fireEvent, render} from '@testing-library/react-native';

import {Home} from './Home';

describe('HomeStack -> Home Screen', () => {
  const props: any = {};

  it('should renders correctly', () => {
    const tree = renderer.create(<Home {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
