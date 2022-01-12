import 'react-native';
import React from 'react';
import rendered from 'react-test-renderer';
import {TouchableHighlight} from 'react-native';
import {fireEvent, render} from '@testing-library/react-native';

import {Button} from './ Button';

describe('Button Component', () => {
  it('should renders correctly', () => {
    const tree = rendered.create(<Button>Click</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should run the function passed in the props when pressed', () => {
    const mockFunction = jest.fn();
    const instance = render(<Button onPress={mockFunction}>Click</Button>);

    fireEvent(instance.UNSAFE_getByType(TouchableHighlight), 'onPress');

    expect(mockFunction).toBeCalledTimes(1);
  });
});
