import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinesDrawer from './src/LinesDrawer';

const App = () => {
  return (
    <View style={styles.container}>
      <LinesDrawer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
