import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
    const [outputText, setOutputText] = useState("init state");
    const handleButton = () => {
        setOutputText("clicked")
    }
    return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <Button title="button" onPress={handleButton}/>
        {outputText}
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
