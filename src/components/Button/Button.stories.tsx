import React from 'react';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';

import {Button} from './ Button';

const buttonStories = storiesOf('Global/Button', module);

buttonStories.add('Primary', () => (
  <Button onPress={action('clicked')}>Click</Button>
));
