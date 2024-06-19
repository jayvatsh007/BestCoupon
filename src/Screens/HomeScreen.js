// src/screens/HomeScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import FloatingButton from '../Components/FloatingButton';

const HomeScreen = ({ navigation }) => {
  const handleFloatingButtonPress = () => {
    navigation.navigate('Checkout');
  };

  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://www.amazon.in' }} style={styles.webview} />
      <FloatingButton onPress={handleFloatingButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default HomeScreen;
