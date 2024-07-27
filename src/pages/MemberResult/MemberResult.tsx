import {SafeAreaView, Text} from 'react-native';
import {RootStackParamList} from '../../types.d';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styles from './MemberResult.style';
type Props = NativeStackScreenProps<RootStackParamList, 'MemberResult'>;

function MemberResult({route}: Props) {
  const {user} = route.params;

  return (
    <SafeAreaView>
      <Text style={styles.message}>Kayıt Tamamlandı</Text>
      <Text style={styles.label}>Üyenin adı: {user.name}</Text>
      <Text style={styles.label}>Üyenin soyadı: {user.surname}</Text>
      <Text style={styles.label}>Üyenin yaşı: {user.age}</Text>
      <Text style={styles.label}>Üyenin e-postası: {user.email}</Text>
    </SafeAreaView>
  );
}

export default MemberResult;
