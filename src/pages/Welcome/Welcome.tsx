import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Button from '../../components/Button';
import styles from './Welcome.style';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types.d';

type props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

function Welcome({navigation}: props) {
  function goToMemberSign() {
    navigation.navigate('MemberSign');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome</Text>
      <Button text="üye kaydi olustur" onPress={goToMemberSign}></Button>
    </SafeAreaView>
  );
}

export default Welcome;
