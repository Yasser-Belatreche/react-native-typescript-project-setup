// if you use expo remove this line
import {AppRegistry, Platform} from 'react-native';

import {getStorybookUI, configure, addDecorator} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';
import {name as appName} from '../../app.json';

import {loadStories} from './storyLoader';

import './rn-addons';

// enables knobs for all stories
addDecorator(withKnobs);

// uncomment code above to center the element
// addDecorator(Elem => (
//   <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
//     <Elem />
//   </View>
// ));

// import stories
configure(() => {
  loadStories();
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  host: Platform.OS === 'android' ? '10.0.2.2' : '0.0.0.0',
  asyncStorage: require('@react-native-async-storage/async-storage').default,
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
