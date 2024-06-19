// src/components/CouponList.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const CouponList = ({ coupons }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={coupons}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.couponItem}>
            <Text>{item.code} - {item.discount}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  couponItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default CouponList;
