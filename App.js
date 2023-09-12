import { StyleSheet, Text, View } from 'react-native';
import RadioButton from './components/RadioButton';
import { useState } from 'react';

export default function App() {
  const [gender, setGender] = useState(1)

  const genders = [
    {label: "Male",value: 1},
    {label: "Female",value: 2}
  ]

  return (
    <View style={styles.container}>
      <RadioButton options={genders} onChangeValue={(value) => setGender(value)}/>
      <Text>Selected gender is {gender}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
