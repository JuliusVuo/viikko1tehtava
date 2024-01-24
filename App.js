import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState (0);
  const [limits, setLimits] = useState ('');



function calculate() {
  const lowerLimit = (220-age) * 0.65
  const upperLimit = (220-age) * 0.85
  const result = lowerLimit.toFixed(0) +"-"+ upperLimit.toFixed(0)
  setLimits(result);
}

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput style={styles.field} value={age} onChangeText={text => setAge(text)} keyboardType='numeric'/>
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{limits}</Text>
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
