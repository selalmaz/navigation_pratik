import React, {useState} from 'react';
import {Alert, SafeAreaView, Text} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {RootStackParamList} from '../../types.d';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {User} from '../../userData';

type props = NativeStackScreenProps<RootStackParamList, 'MemberSign'>;

function MemberSign({navigation}: props) {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);
  // state de pratik kazanmak icin state kullandım
  // formik kullanılabilir

  function handleSubmit() {
    if (!userName || !userSurname || !userAge || !userMail) {
      Alert.alert('hata', 'Bilgiler boş bırakılamaz!');

      return 
    }

    const user: User = {
      name: userName,
      surname: userSurname,
      email: userMail,
      age: userAge,
    };

    navigation.navigate('MemberResult', {user});
  }

  return (
    <SafeAreaView>
      <Input
        label="Üyenin Adı"
        placeHolder="Üyenin ismini giriniz"
        onChangeText={setUserName}></Input>
      <Input
        label="Üyenin Soyadı"
        placeHolder="Üyenin soyadini giriniz"
        onChangeText={setUserSurname}></Input>
      <Input
        label="Üyenin E-postası"
        placeHolder="Üyenin e-postasini giriniz"
        onChangeText={setUserMail}></Input>
      <Input
        label="Üyenin Yaşı"
        placeHolder="Üyenin yasini giriniz"
        onChangeText={setUserAge}></Input>

      <Button text="Kaydı Tamamla" onPress={handleSubmit}></Button>
    </SafeAreaView>
  );
}

export default MemberSign;
