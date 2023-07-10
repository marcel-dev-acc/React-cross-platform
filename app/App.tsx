import React from 'react';
import {
  SafeAreaView, StyleSheet,
} from 'react-native';

import {Button} from './src/components/General';


const App = (): JSX.Element => {

  return (
    <SafeAreaView style={styles.appContainer}>
      <Button handler={() => console.log('Pressed')} text="Button" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
