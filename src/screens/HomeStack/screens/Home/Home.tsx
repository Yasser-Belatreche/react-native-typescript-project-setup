import React from 'react';
import {View, Text, Linking} from 'react-native';

// types
import {HomeStackScreenProps} from '../../HomeStack.types';

// styles
import {styles} from './Home.style';

interface Props extends HomeStackScreenProps<'Home'> {}

const Home: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.happyCoding}>Happy Coding ✌️✌️</Text>
      <Text style={styles.credit}>
        <Text>Made By </Text>
        <Text
          style={styles.underline}
          onPress={() =>
            Linking.openURL(
              'https://www.linkedin.com/in/yasser-belatreche-6b450620a/',
            )
          }>
          Yasser
        </Text>
      </Text>
    </View>
  );
};

export {Home};
