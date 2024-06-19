import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const FloatingButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
      {/* will work properly api throwing 502 */}
      <Image 
      source={require('../Image/Amazondum.png')}
       style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007bff',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default FloatingButton;
