import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './Input.style';

function Input({label,placeHolder,onChangeText}: any) {
  return [
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput placeholder={placeHolder}
            onChangeText={onChangeText}></TextInput>
      </View>
    </View>
  ];
}

export default Input;
