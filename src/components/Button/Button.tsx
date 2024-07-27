import React from 'react';
import {Text, TouchableOpacity, GestureResponderEvent} from 'react-native';
import styles from './Button.style';

// `Button` bileşeni için `props` tipini tanımlayın
interface ButtonProps {
  text: string;
  onPress: (event: GestureResponderEvent) => void; // `onPress` bir fonksiyon, `GestureResponderEvent` ile tiplenmiş
}

const Button: React.FC<ButtonProps> = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
