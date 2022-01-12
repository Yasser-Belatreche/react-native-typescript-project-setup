import React from 'react';
import {Text, TouchableHighlight} from 'react-native';

// styles
import styles from './Button.style';

interface Props {
  onPress?: () => void;
}

const Button: React.FC<Props> = ({onPress, children}) => {
  return (
    <TouchableHighlight style={styles} onPress={onPress}>
      <Text>{children}</Text>
    </TouchableHighlight>
  );
};

export {Button};
