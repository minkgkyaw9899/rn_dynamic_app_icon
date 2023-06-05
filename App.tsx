import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {changeIcon, getIcon} from 'react-native-change-icon';

export default function App() {
  const [currentIconName, setCurrentIconName] = useState<string>('');

  /**
   * Uncomment useEffect hook, you will be see the error
   */
  
  // useEffect(() => {
  //   getIcon().then((name: string) => setCurrentIconName(name));
  // }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          changeIcon('white_heart')
            .then(setCurrentIconName)
            .catch(e => console.log(e.message))
        }>
        <Text style={styles.text}>SWITCH TO white ICON</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          changeIcon('black_heart')
            .then(setCurrentIconName)
            .catch(e => console.log(e.message))
        }>
        <Text style={styles.text}>SWITCH TO black ICON</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{'Icon name: ' + currentIconName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});
