// src/components/ProgressBar.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ progress, coupon }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: `${progress}%` }]} />
      <Text style={styles.text}>Applying: {coupon}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#007bff',
  },
  text: {
    marginLeft: 10,
  },
});

export default ProgressBar;
