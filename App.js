import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState ('');
  const [limits, setLimits] = useState (0);



function calculate() {
  const result = ((220-age) * 0.65) +"-"+ ((220-age) * 0.85)
  setLimits(result);
}

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput style={styles.field} value={age} onChange={text => setAge(text)} keyboardType='numeric'/>
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{limits.toFixed(2)}</Text>
      <Button onPress={calculate} title= "Calculate"/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginLeft:10,
  },
  field:{
    marginBottom:10,
  }
});
