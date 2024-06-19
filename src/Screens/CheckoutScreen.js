// src/screens/CheckoutScreen.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProgressBar from '../Components/ProgressBar';
import CouponList from '../Components/CouponList';
import { fetchCoupons } from '../Store/CouponAction';

const CheckoutScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentCoupon, setCurrentCoupon] = useState('');
  const [appliedCoupons, setAppliedCoupons] = useState([]);
  const dispatch = useDispatch();
  const coupons = useSelector((state) => state.coupons);

  useEffect(() => {
    dispatch(fetchCoupons());
  }, [dispatch]);

  useEffect(() => {
    if (coupons.length > 0) {
      applyCoupons();
    }
  }, [coupons]);

  const applyCoupons = async () => {
    for (let i = 0; i < coupons.length; i++) {
      const coupon = coupons[i];
      setCurrentCoupon(coupon.code);
      setAppliedCoupons((prev) => [...prev, coupon]);
      setProgress(((i + 1) / coupons.length) * 100);
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate coupon application
    }
    // Apply the coupon with maximum discount
    const maxDiscountCoupon = coupons.reduce((prev, current) => (prev.discount > current.discount ? prev : current));
    Alert.alert('Best Coupon Applied', `Applied ${maxDiscountCoupon.code} with ${maxDiscountCoupon.discount}% discount`);
  };

  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} coupon={currentCoupon} />
      <CouponList coupons={appliedCoupons} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default CheckoutScreen;
