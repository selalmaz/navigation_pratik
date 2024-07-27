import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

function MemberSign() {
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userMail, setUserMail] = useState('');
  // state de pratik kazanmak icin state kullandım

  function handleSubmit() {
    const user = {
      userName: userName,
      userSurname: userSurname,
      userAge: userAge,
      userMail: userMail,
    };

    console.log(user);
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
