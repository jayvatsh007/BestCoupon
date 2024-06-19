import axios from 'axios';

export const FETCH_COUPONS_SUCCESS = 'FETCH_COUPONS_SUCCESS';

export const fetchCouponsSuccess = (coupons) => ({
  type: FETCH_COUPONS_SUCCESS,
  payload: coupons,
});

export const fetchCoupons = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://coupons.buyhatke.com/PickCoupon/FreshCoupon/getCoupons.php?pos=1');
      dispatch(fetchCouponsSuccess(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
